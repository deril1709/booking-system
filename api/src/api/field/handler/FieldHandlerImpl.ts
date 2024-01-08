import { Request, Response, NextFunction } from "express";
import { FieldHandler } from "./FieldHandler";
import { IPostFieldPayload } from "../../../utils/interfaces/IPostFieldPayload";
import { SchemaValidator } from "../../../validator/SchemaValidator";
import { FieldPostPayloadSchema } from "../../../validator/field/Joi/FieldPostPayloadSchema";
import { RESPONSE_MESSAGE, createResponse } from "../../../utils";
import { FieldService } from "../../../services/field/FieldService";
import { fieldListDTO } from "../../../utils/dto/field/FieldListDTO";
import { fieldDetailDTO } from "../../../utils/dto/field/FieldDetailDTO";

export class FieldHandlerImpl extends FieldHandler {
  private fieldService: FieldService;
  private schemaValidator: SchemaValidator;

  constructor(
    service: { fieldService: FieldService },
    schemaValidator: SchemaValidator
  ) {
    super();
    this.fieldService = service.fieldService;
    this.schemaValidator = schemaValidator;
  }

  async getField(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { id } = req.params;

    try {
      const field = await this.fieldService.getFieldById(id);

      return res
        .status(200)
        .json(createResponse(RESPONSE_MESSAGE.SUCCESS, fieldDetailDTO(field)));
    } catch (error) {
      return next(error);
    }
  }

  async getFields(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const fields = await this.fieldService.getAllFields();

    return res
      .status(200)
      .json(createResponse(RESPONSE_MESSAGE.SUCCESS, fields.map(fieldListDTO)));
  }

  async postField(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const payload: IPostFieldPayload = req.body;

    try {
      this.schemaValidator.validate({
        schema: FieldPostPayloadSchema,
        payload,
      });

      await this.fieldService.addNewField(payload);

      return res
        .status(201)
        .json(
          createResponse(
            RESPONSE_MESSAGE.SUCCESS,
            "successfully register a new field"
          )
        );
    } catch (error) {
      return next(error);
    }
  }
}
