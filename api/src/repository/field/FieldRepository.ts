import { FieldEntity } from "../../entities/field/FieldEntity";
import { IPutFieldPayload } from "../../utils/interfaces/request/IPutFieldPayload";

export abstract class FieldRepository {
  async updateFieldById(id: string, payload: IPutFieldPayload) {
    throw new Error("Method not implemented.");
  }

  async deleteById(id: string) {
    throw new Error("Method not implemented.");
  }

  async getFieldById(
    id: string,
    isOrderPopulated: boolean = false
  ): Promise<FieldEntity | null> {
    throw new Error("Method not implemented.");
  }
  async getAllFields(): Promise<FieldEntity[]> {
    throw new Error("Method not implemented.");
  }

  async addField(newField: FieldEntity) {
    throw new Error("Method Not Implemented");
  }
}
