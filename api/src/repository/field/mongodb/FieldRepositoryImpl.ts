import { isValidObjectId } from "mongoose";
import { FieldEntity } from "../../../entities/field/FieldEntity";
import { FieldModel } from "../../../entities/field/mongoose/FieldSchema";
import { FieldRepository } from "../FieldRepository";
import { IOrderSchema } from "../../../utils/interfaces/schema/OrderSchema";
import { orderSchemaToOrderEntity } from "../../../utils";
import { OrderEntity } from "../../../entities/order/OrderEntity";

export class FieldRepositoryImpl extends FieldRepository {
  async getFieldById(
    id: string,
    isOrderPopulated: boolean = false
  ): Promise<FieldEntity | null> {
    if (!isValidObjectId(id)) {
      return null;
    }

    const query = FieldModel.findById(id);
    let fieldQuery;
    let orders: OrderEntity[] = [];

    if (isOrderPopulated) {
      fieldQuery = await query.populate<{ orders: IOrderSchema[] }>("orders");
      orders = fieldQuery?.orders.map(orderSchemaToOrderEntity) ?? [];
    } else {
      fieldQuery = await query;
    }

    if (!fieldQuery) {
      return null;
    }

    const field = new FieldEntity(
      fieldQuery.title,
      fieldQuery.address,
      fieldQuery.openingTime,
      fieldQuery.closingTime,
      fieldQuery.priceHourly,
      fieldQuery.description,
      fieldQuery.extraInfo
    );
    field.id = fieldQuery.id;
    field.photos = fieldQuery.photos ?? [];
    field.orders = orders;

    console.log(field);

    return field;
  }

  async getAllFields(): Promise<FieldEntity[]> {
    const fieldQuery = await FieldModel.find({});
    const fields: FieldEntity[] = [];

    fieldQuery.forEach((query) => {
      const field = new FieldEntity(
        query.title,
        query.address,
        query.openingTime,
        query.closingTime,
        query.priceHourly,
        query.description,
        query.extraInfo
      );
      field.photos = query.photos ?? [];
      field.id = query.id;

      fields.push(field);
    });

    return fields ?? [];
  }

  async addField(newField: FieldEntity): Promise<void> {
    try {
      const query = await FieldModel.create([
        {
          address: newField.address,
          closingTime: newField.closingTime,
          description: newField.description,
          extraInfo: newField.extraInfo,
          openingTime: newField.openingTime,
          photos: newField.photos,
          title: newField.title,
          priceHourly: newField.priceHourly,
        },
      ]);
    } catch (error) {
      throw error;
    }
  }
}
