import { NextFunction, Request, Response } from "express";

export abstract class UserHandler {
  constructor() {
    this.postUserLogin = this.postUserLogin.bind(this);
    this.getUserCredential = this.getUserCredential.bind(this);
    this.postUser = this.postUser.bind(this);
    this.postUserAdmin = this.postUserAdmin.bind(this);
  }

  async postUserAdmin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async getUserCredential(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async postUserLogin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async postUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
