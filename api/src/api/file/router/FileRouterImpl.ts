import { Router } from "express";
import { BaseRouter } from "../../base/Router";
import { AuthorizationBearer } from "../../../middleware/auth/AuthorizationBearer";
import { ROLE } from "../../../utils";
import { FileHandler } from "../handler/FileHandler";
import { multerHelper } from "../../../utils/file/MulterHelper";

export class FileRouterImpl extends BaseRouter {
  private handler: FileHandler;
  private authorizationMiddleware: AuthorizationBearer;

  constructor(
    handler: FileHandler,
    authorizationMiddleware: AuthorizationBearer
  ) {
    super("/files");
    this.handler = handler;
    this.authorizationMiddleware = authorizationMiddleware;
  }

  register(): Router {
    // * upload file
    this.router
      .route(this.path)
      .post(
        this.authorizationMiddleware.authorize([ROLE.ADMIN, ROLE.RENTEE]),
        multerHelper.upload.single("file"),
        this.handler.postFile
      );

    return this.router;
  }
}
