import { Router } from "express";
import { FieldHandler } from "../handler/FieldHandler";
import { AuthorizationBearer } from "../../../middleware/auth/AuthorizationBearer";
import { ROLE } from "../../../utils";
import { BaseRouter } from "../../base/Router";

export class FieldRouterImpl extends BaseRouter {
  private authorizationMiddlware: AuthorizationBearer;
  private handler: FieldHandler;

  constructor(
    handler: FieldHandler,
    authorizationMiddleware: AuthorizationBearer
  ) {
    super("/fields");
    this.handler = handler;
    this.authorizationMiddlware = authorizationMiddleware;
  }

  register(): Router {
    // * add field
    // * get all fields
    this.router
      .route(this.path)
      .post(
        this.authorizationMiddlware.authorize([ROLE.ADMIN]),
        this.handler.postField
      )
      .get(this.handler.getFields);

    // * get one field by id
    this.router
      .route(this.path + "/:id")
      .get(this.handler.getField)
      .delete(
        this.authorizationMiddlware.authorize([ROLE.ADMIN]),
        this.handler.deleteField
      )
      .put(
        this.authorizationMiddlware.authorize([ROLE.ADMIN]),
        this.handler.putField
      );

    return this.router;
  }
}
