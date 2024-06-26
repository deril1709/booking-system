import { NotFoundError } from "../../Exceptions/http/NotFoundError";
import { FieldEntity } from "../../entities/field/FieldEntity";
import { ERRORCODE } from "../../utils";
import { IPostFieldPayload } from "../../utils/interfaces/request/IPostFieldPayload";
import { IPutFieldPayload } from "../../utils/interfaces/request/IPutFieldPayload";
import { FieldService } from "./FieldService";

export class FieldServiceImpl extends FieldService {
  async updateFieldById(id: string, payload: IPutFieldPayload): Promise<void> {
    const field = await this.fieldRepository.getFieldById(id);

    if (!field) {
      throw new NotFoundError(ERRORCODE.COMMON_NOT_FOUND, "field's not found");
    }

    await this.fieldRepository.updateFieldById(id, payload);
  }

  async deleteFieldById(id: string): Promise<void> {
    const field = await this.fieldRepository.getFieldById(id);

    if (!field) {
      throw new NotFoundError(ERRORCODE.COMMON_NOT_FOUND, "field's not found");
    }

    await this.fieldRepository.deleteById(id);
  }

  async getFieldById(id: string): Promise<FieldEntity> {
    const field = await this.fieldRepository.getFieldById(id);

    if (!field) {
      throw new NotFoundError(ERRORCODE.COMMON_NOT_FOUND, "field's not found");
    }

    return field;
  }

  async getAllFields(): Promise<FieldEntity[]> {
    const fields = await this.fieldRepository.getAllFields();

    return fields;
  }

  async addNewField(payload: IPostFieldPayload): Promise<void> {
    const newField = new FieldEntity(
      payload.title,
      payload.address,
      payload.openingTime,
      payload.closingTime,
      payload.priceHourly,
      payload.description,
      payload.extraInfo
    );

    newField.photos = payload.photos ?? [];

    await this.fieldRepository.addField(newField);
  }
}
