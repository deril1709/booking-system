import { NextFunction, Request, Response } from "express";

export abstract class FieldHandler {
  constructor() {
    this.getField = this.getField.bind(this);
    this.getFields = this.getFields.bind(this);
    this.postField = this.postField.bind(this);
    this.deleteField = this.deleteField.bind(this);
    this.putField = this.putField.bind(this);
  }

  async putField(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async deleteField(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
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
