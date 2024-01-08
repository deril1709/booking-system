import { Router } from "express";
import { UserHandler } from "../handler/UserHandler";
import { BasicAuthMiddleware } from "../../../middleware/auth/BasicAuth";
import { AuthorizationBearer } from "../../../middleware/auth/AuthorizationBearer";
import { ROLE } from "../../../utils";
import { BaseRouter } from "../../base/Router";

export class UserRouterImpl extends BaseRouter {
  private basicAuthMiddleware: BasicAuthMiddleware;
  private authorizationMiddlware: AuthorizationBearer;
  private handler: UserHandler;

  constructor(
    handler: UserHandler,
    basicAuthMiddleware: BasicAuthMiddleware,
    authorizationMiddleware: AuthorizationBearer
  ) {
    super("/users");
    this.handler = handler;
    this.basicAuthMiddleware = basicAuthMiddleware;
    this.authorizationMiddlware = authorizationMiddleware;
  }

  register(): Router {
    // * user registration
    // * get user credential
    this.router
      .route(this.path)
      .post(this.handler.postUser)
      .get(
        this.authorizationMiddlware.authorize([
          ROLE.ADMIN.toString(),
          ROLE.RENTEE.toString(),
        ]),
        this.handler.getUserCredential
      );
    // * user login
    this.router
      .route(this.path + "/login")
      .post(
        this.basicAuthMiddleware.authenticate(),
        this.handler.postUserLogin
      );
    // * register an admin
    this.router.route(this.path + "/admins").post(this.handler.postUserAdmin);

    return this.router;
  }
}
