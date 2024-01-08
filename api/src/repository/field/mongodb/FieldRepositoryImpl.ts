import { isValidObjectId } from "mongoose";
import { FieldEntity } from "../../../entities/field/FieldEntity";
import { FieldModel } from "../../../entities/field/mongoose/FieldSchema";
import { FieldRepository } from "../FieldRepository";

export class FieldRepositoryImpl extends FieldRepository {
  async getFieldById(id: string): Promise<FieldEntity | null> {
    if (!isValidObjectId(id)) {
      return null;
    }

    const fieldQuery = await FieldModel.findById(id);

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
    field.photos = fieldQuery.photos;

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
      field.photos = query.photos;
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
