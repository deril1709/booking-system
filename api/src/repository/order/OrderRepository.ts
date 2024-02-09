import { OrderEntity } from "../../entities/order/OrderEntity";

export abstract class OrderRepository {
  async deleteOrderStatusById(orderId: string) {
    throw new Error("Method not implemented.");
  }
  async getOrderById(orderId: string): Promise<OrderEntity | null> {
    throw new Error("Method not implemented.");
  }
  async changeOrderStatusById(orderId: string, status: boolean) {
    throw new Error("Method not implemented.");
  }

  async getAllOrders(): Promise<OrderEntity[]> {
    throw new Error("Method not implemented.");
  }

  async addOrder(newOrder: OrderEntity): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
