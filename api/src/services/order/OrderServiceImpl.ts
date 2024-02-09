import { NotFoundError } from "../../Exceptions/http/NotFoundError";
import { OrderEntity } from "../../entities/order/OrderEntity";
import { OrderRepository } from "../../repository/order/OrderRepository";
import { BOOKING_STATUS, ERRORCODE } from "../../utils";
import { IPostOrderPayload } from "../../utils/interfaces/request/IPostOrderPayload";
import { IPutOrderStatusPayload } from "../../utils/interfaces/request/IPutOrderStatusPayload";
import { OrderService } from "./OrderService";

export class OrderServiceImpl extends OrderService {
  constructor(repository: { orderRepository: OrderRepository }) {
    super(repository);
  }

  async changeOrderStatus(
    orderId: string,
    payload: IPutOrderStatusPayload
  ): Promise<void> {
    const order = await this.orderRepository.getOrderById(orderId);

    if (!order) {
      throw new NotFoundError(ERRORCODE.COMMON_NOT_FOUND, "order's not found");
    }

    await this.orderRepository.changeOrderStatusById(orderId, payload.status);
  }

  async deleteOrderStatus(orderId: string) {
    const order = await this.orderRepository.getOrderById(orderId);

    if (!order) {
      throw new NotFoundError(ERRORCODE.COMMON_NOT_FOUND, "order's not found");
    }

    await this.orderRepository.deleteOrderStatusById(orderId);
  }

  async getAllOrders(): Promise<OrderEntity[]> {
    const orders = await this.orderRepository.getAllOrders();

    return orders;
  }

  async addNewOrder(userId: string, payload: IPostOrderPayload): Promise<void> {
    const newOrder = new OrderEntity(
      userId,
      payload.fieldId,
      payload.bookDate,
      payload.duration,
      BOOKING_STATUS.PENDING,
      payload.paymentProof
    );

    await this.orderRepository.addOrder(newOrder);
  }
}
