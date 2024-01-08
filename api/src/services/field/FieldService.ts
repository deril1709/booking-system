import { FieldEntity } from "../../entities/field/FieldEntity";
import { FieldRepository } from "../../repository/field/FieldRepository";
import { IPostFieldPayload } from "../../utils/interfaces/IPostFieldPayload";

export abstract class FieldService {
  protected fieldRepository: FieldRepository;

  constructor(repository: { fieldRepository: FieldRepository }) {
    this.fieldRepository = repository.fieldRepository;
  }

  async getFieldById(id: string): Promise<FieldEntity> {
    throw new Error("Method not implemented.");
  }

  async getAllFields(): Promise<FieldEntity[]> {
    throw new Error("Method not implemented.");
  }

  async addNewField(payload: IPostFieldPayload) {
    throw new Error("Method not implemented.");
  }
}
