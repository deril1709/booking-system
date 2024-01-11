import { Router } from "express";
import { BaseRouter } from "../../base/Router";
import { AuthorizationBearer } from "../../../middleware/auth/AuthorizationBearer";
import { ROLE } from "../../../utils";
import { OrderHandler } from "../handler/OrderHandler";

export class OrderRouterImpl extends BaseRouter {
  private handler: OrderHandler;
  private authorizationMiddleware: AuthorizationBearer;

  constructor(
    handler: OrderHandler,
    authorizationMiddleware: AuthorizationBearer
  ) {
    super("/orders");
    this.handler = handler;
    this.authorizationMiddleware = authorizationMiddleware;
  }

  register(): Router {
    // * book field and create new order
    // * get all orders
    this.router
      .route(this.path)
      .post(
        this.authorizationMiddleware.authorize([ROLE.RENTEE]),
        this.handler.postOrder
      )
      .get(
        this.authorizationMiddleware.authorize([ROLE.ADMIN]),
        this.handler.getOrders
      );

    // * accept / reject booking status
    this.router
      .route(this.path + "/:orderId")
      .put(
        this.authorizationMiddleware.authorize([ROLE.ADMIN]),
        this.handler.putOrderStatus
      );

    return this.router;
  }
}
