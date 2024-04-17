import { isValidObjectId } from "mongoose";
import { FieldEntity } from "../../../entities/field/FieldEntity";
import { FieldModel } from "../../../entities/field/mongoose/FieldSchema";
import { FieldRepository } from "../FieldRepository";
import { IOrderSchema } from "../../../utils/interfaces/schema/OrderSchema";
import { ERRORCODE, orderSchemaToOrderEntity } from "../../../utils";
import { OrderEntity } from "../../../entities/order/OrderEntity";
import { BadRequestError } from "../../../Exceptions/http/BadRequestError";
import { IPostFieldPayload } from "../../../utils/interfaces/request/IPostFieldPayload";
import { IPutFieldPayload } from "../../../utils/interfaces/request/IPutFieldPayload";

export class FieldRepositoryImpl extends FieldRepository {
  async updateFieldById(id: string, payload: IPutFieldPayload): Promise<void> {
    try {
      console.log(payload.photos);
      await FieldModel.findByIdAndUpdate(id, {
        $set: {
          address: payload.address,
          closingTime: payload.closingTime,
          description: payload.description,
          extraInfo: payload.extraInfo,
          openingTime: payload.openingTime,
          photos: payload.photos,
          title: payload.title,
          priceHourly: payload.priceHourly,
        },
      });
    } catch (error: any) {
      throw new BadRequestError(ERRORCODE.BAD_REQUEST_ERROR, error.toString());
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      await FieldModel.findByIdAndDelete(id);
    } catch (error: any) {
      throw new BadRequestError(ERRORCODE.BAD_REQUEST_ERROR, error.toString());
    }
  }

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
