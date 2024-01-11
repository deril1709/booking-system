import { OrderEntity } from "../../entities/order/OrderEntity";
import { OrderRepository } from "../../repository/order/OrderRepository";
import { IPostOrderPayload } from "../../utils/interfaces/request/IPostOrderPayload";
import { IPutOrderStatusPayload } from "../../utils/interfaces/request/IPutOrderStatusPayload";

export abstract class OrderService {
  protected orderRepository: OrderRepository;

  constructor(repository: { orderRepository: OrderRepository }) {
    this.orderRepository = repository.orderRepository;
  }

  async changeOrderStatus(orderId: string, payload: IPutOrderStatusPayload) {
    throw new Error("Method not implemented.");
  }

  async getAllOrders(): Promise<OrderEntity[]> {
    throw new Error("Method not implemented.");
  }

  async addNewOrder(userId: string, payload: IPostOrderPayload) {
    throw new Error("Method not implemented.");
  }
}
