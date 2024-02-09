import { NextFunction, Request, Response } from "express";

export abstract class OrderHandler {
  constructor() {
    this.postOrder = this.postOrder.bind(this);
    this.getOrders = this.getOrders.bind(this);
    this.putOrderStatus = this.putOrderStatus.bind(this);
    this.deleteOrderStatus = this.deleteOrderStatus.bind(this);
  }

  async putOrderStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async getOrders(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async postOrder(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async deleteOrderStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
