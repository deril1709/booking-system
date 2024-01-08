import { Request, Response, NextFunction } from "express";
import { UserHandler } from "./UserHandler";
import {
  RESPONSE_MESSAGE,
  createResponse,
  getTokenPayload,
} from "../../../utils";
import { AuthService } from "../../../services/auth/AuthService";
import { IPostUserPayload } from "../../../utils/interfaces/IPostUserPayload";
import { SchemaValidator } from "../../../validator/SchemaValidator";
import { UserPostPayloadSchema } from "../../../validator/user/Joi/UserPostPayloadSchema";
import { UserService } from "../../../services/user/UserService";
import { ITokenPayload } from "../../../utils/interfaces/ITokenPayload";
import { userCredentialDTO } from "../../../utils/dto/user/UserCredentialDTO";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export class UserHandlerImpl extends UserHandler {
  private authService: AuthService;
  private userService: UserService;
  private schemaValidator: SchemaValidator;

  constructor(
    service: { authService: AuthService; userService: UserService },
    schemaValidator: SchemaValidator
  ) {
    super();
    this.authService = service.authService;
    this.userService = service.userService;
    this.schemaValidator = schemaValidator;
  }

  async postUserAdmin(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    const payload: IPostUserPayload = req.body;

    try {
      this.schemaValidator.validate({
        schema: UserPostPayloadSchema,
        payload,
      });

      await this.userService.addNewUserAdmin(payload);

      return res
        .status(201)
        .json(
          createResponse(
            RESPONSE_MESSAGE.SUCCESS,
            "successfully register a new user admin"
          )
        );
    } catch (error) {
      return next(error);
    }
  }

  async postUser(req: Request, res: Response, next: NextFunction) {
    const payload: IPostUserPayload = req.body;

    try {
      this.schemaValidator.validate({
        schema: UserPostPayloadSchema,
        payload,
      });

      await this.userService.addNewUser(payload);

      return res
        .status(201)
        .json(
          createResponse(
            RESPONSE_MESSAGE.SUCCESS,
            "successfully register a new user"
          )
        );
    } catch (error) {
      return next(error);
    }
  }

  async postUserLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.authService.generateToken(getTokenPayload(res));

      return res
        .status(200)
        .json(createResponse(RESPONSE_MESSAGE.SUCCESS, token));
    } catch (error) {
      return next(error);
    }
  }
  async getUserCredential(req: Request, res: Response, next: NextFunction) {
    const tokenPayload: ITokenPayload = getTokenPayload(res);
    const user = await this.userService.getUserByUsername(tokenPayload.email);

    return res
      .status(200)
      .json(createResponse(RESPONSE_MESSAGE.SUCCESS, userCredentialDTO(user)));
  }
}
