import { ROLE } from "../../utils";
import { OrderEntity } from "../order/OrderEntity";

export class UserEntity {
  private _name!: string;
  private _email!: string;
  private _password?: string | undefined;
  private _role!: ROLE | string;
  private _id?: string | undefined;
  private _orders?: OrderEntity[] | undefined;

  constructor(
    name: string,
    email: string,
    role: ROLE | string,
    password?: string,
    id?: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public get orders(): OrderEntity[] | undefined {
    return this._orders;
  }

  public set orders(value: OrderEntity[] | undefined) {
    this._orders = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get password(): string | undefined {
    return this._password;
  }

  public set password(value: string | undefined) {
    this._password = value;
  }

  public get role(): ROLE | string {
    return this._role;
  }

  public set role(value: ROLE | string) {
    this._role = value;
  }

  public get id(): string | undefined {
    return this._id;
  }

  public set id(value: string | undefined) {
    this._id = value;
  }
}
