import { FieldHandlerImpl } from "./api/field/handler/FieldHandlerImpl";
import { FieldRouterImpl } from "./api/field/router/FieldRouterImpl";
import { FileHandlerImpl } from "./api/file/handler/FileHandlerImpl";
import { FileRouterImpl } from "./api/file/router/FileRouterImpl";
import { UserHandlerImpl } from "./api/user/handler/UserHandlerImpl";
import { UserRouterImpl } from "./api/user/router/UserRouterImpl";
import { hashImpl } from "./config/crypto";
import { databaseConnection } from "./config/database";
import { startServer } from "./config/express";
import { AuthorizationBearer } from "./middleware/auth/AuthorizationBearer";
import { BasicAuthMiddleware } from "./middleware/auth/BasicAuth";
import { FieldRepositoryImpl } from "./repository/field/mongodb/FieldRepositoryImpl";
import { UserRepositoryImpl } from "./repository/user/mongodb/UserRepositoryImpl";
import { AuthServiceImpl } from "./services/auth/AuthServiceImpl";
import { FieldServiceImpl } from "./services/field/FieldServiceImpl";
import { UserServiceImpl } from "./services/user/UserServiceImpl";
import { JoiValidatorImpl } from "./validator/JoiValidatorImpl";

// * repositories
const userRepository = new UserRepositoryImpl();
const fieldRepository = new FieldRepositoryImpl();
// * services
const authService = new AuthServiceImpl();
const userService = new UserServiceImpl({ userRepository }, hashImpl);
const fieldService = new FieldServiceImpl({ fieldRepository });
// * validators
const schemaValidator = new JoiValidatorImpl();
// * handlers
const userHandler = new UserHandlerImpl(
  { authService, userService },
  schemaValidator
);
const fieldHandler = new FieldHandlerImpl({ fieldService }, schemaValidator);
const fileHandler = new FileHandlerImpl();
// * misc
const basicAuthMiddleware = new BasicAuthMiddleware(userService, hashImpl);
const authorizationMiddleware = new AuthorizationBearer(userService);
// * routers
const userRouter = new UserRouterImpl(
  userHandler,
  basicAuthMiddleware,
  authorizationMiddleware
);
const fieldRouter = new FieldRouterImpl(fieldHandler, authorizationMiddleware);
const fileRouter = new FileRouterImpl(fileHandler, authorizationMiddleware);

databaseConnection.load();
startServer([userRouter, fieldRouter, fileRouter]).start();
