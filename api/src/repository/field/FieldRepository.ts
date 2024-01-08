import { FieldEntity } from "../../entities/field/FieldEntity";

export abstract class FieldRepository {
  async getFieldById(id: string): Promise<FieldEntity | null> {
    throw new Error("Method not implemented.");
  }
  async getAllFields(): Promise<FieldEntity[]> {
    throw new Error("Method not implemented.");
  }

  async addField(newField: FieldEntity) {
    throw new Error("Method Not Implemented");
  }
}
