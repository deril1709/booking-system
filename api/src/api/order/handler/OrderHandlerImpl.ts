import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { OrderHandler } from "./OrderHandler";
import {
  RESPONSE_MESSAGE,
  createResponse,
  getTokenPayload,
} from "../../../utils";
import { IPostOrderPayload } from "../../../utils/interfaces/request/IPostOrderPayload";
import { SchemaValidator } from "../../../validator/SchemaValidator";
import { OrderPostPayloadSchema } from "../../../validator/order/Joi/OrderPostPayloadSchema";
import { OrderService } from "../../../services/order/OrderService";
import { orderListDTO } from "../../../utils/dto/order/OrderListDTO";
import { IPutOrderStatusPayload } from "../../../utils/interfaces/request/IPutOrderStatusPayload";
import { OrderPutStatusPayloadSchema } from "../../../validator/order/Joi/OrderPutStatusPayloadSchema";

export class OrderHandlerImpl extends OrderHandler {
  private schemaValidator: SchemaValidator;
  private orderService: OrderService;

  constructor(
    service: { orderService: OrderService },
    schemaValidator: SchemaValidator
  ) {
    super();
    this.orderService = service.orderService;
    this.schemaValidator = schemaValidator;
  }

  

  async deleteOrderStatus(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    const { orderId } = req.params;

    try {
      await this.orderService.deleteOrderStatus(orderId);

      return res
        .status(200)
        .json(
          createResponse(
            RESPONSE_MESSAGE.SUCCESS,
            "successfully delete order status"
          )
        );
    } catch (error) {
      return next(error);
    }
  }

  async putOrderStatus(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    const { orderId } = req.params;
    const payload: IPutOrderStatusPayload = req.body;

    try {
      this.schemaValidator.validate({
        schema: OrderPutStatusPayloadSchema,
        payload,
      });

      console.log(orderId);

      await this.orderService.changeOrderStatus(orderId, payload);

      return res
        .status(200)
        .json(
          createResponse(
            RESPONSE_MESSAGE.SUCCESS,
            "successfully change order status"
          )
        );
    } catch (error) {
      return next(error);
    }
  }

  async getOrders(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    const orders = await this.orderService.getAllOrders();

    return res
      .status(200)
      .json(createResponse(RESPONSE_MESSAGE.SUCCESS, orders.map(orderListDTO)));
  }

  async postOrder(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    const tokenPayload = getTokenPayload(res);
    const payload: IPostOrderPayload = req.body;

    try {
      this.schemaValidator.validate({
        schema: OrderPostPayloadSchema,
        payload,
      });

      await this.orderService.addNewOrder(tokenPayload.userId, payload);

      return res
        .status(201)
        .json(
          createResponse(RESPONSE_MESSAGE.SUCCESS, "successfully book field")
        );
    } catch (error) {
      return next(error);
    }
  }
}
