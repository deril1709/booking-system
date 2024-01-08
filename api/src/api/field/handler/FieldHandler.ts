import { NextFunction, Request, Response } from "express";

export abstract class FieldHandler {
  constructor() {
    this.getField = this.getField.bind(this);
    this.getFields = this.getFields.bind(this);
    this.postField = this.postField.bind(this);
  }

  async getField(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async getFields(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async postField(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
