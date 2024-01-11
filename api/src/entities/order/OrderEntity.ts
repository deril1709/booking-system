import { BOOKING_STATUS } from "../../utils";
import { FieldEntity } from "../field/FieldEntity";
import { UserEntity } from "../user/UserEntity";

export class OrderEntity {
  private _id!: string;
  private _userId!: string;
  private _fieldId!: string;
  private _bookDate!: number;
  private _duration!: number;
  private _status!: BOOKING_STATUS;
  private _createdAt?: Date | string | undefined;
  private _updatedAt?: Date | string | undefined;
  private _user!: UserEntity;
  private _field!: FieldEntity;
  private _paymentProof!: string;

  constructor(
    userId: string,
    fieldId: string,
    bookDate: number,
    duration: number,
    status: BOOKING_STATUS,
    paymentProof: string
  ) {
    this.userId = userId;
    this.fieldId = fieldId;
    this.bookDate = bookDate;
    this.duration = duration;
    this.status = status;
    this.paymentProof = paymentProof;
  }

  public get paymentProof(): string {
    return this._paymentProof;
  }

  public set paymentProof(value: string) {
    this._paymentProof = value;
  }

  public get field(): FieldEntity {
    return this._field;
  }

  public set field(value: FieldEntity) {
    this._field = value;
  }

  public get user(): UserEntity {
    return this._user;
  }

  public set user(value: UserEntity) {
    this._user = value;
  }

  public get updatedAt(): Date | string | undefined {
    return this._updatedAt;
  }

  public set updatedAt(value: Date | string) {
    this._updatedAt = value;
  }

  public get createdAt(): Date | string | undefined {
    return this._createdAt;
  }

  public set createdAt(value: Date | string) {
    this._createdAt = value;
  }

  public get status(): BOOKING_STATUS {
    return this._status;
  }

  public set status(value: BOOKING_STATUS) {
    this._status = value;
  }

  public get duration(): number {
    return this._duration;
  }

  public set duration(value: number) {
    this._duration = value;
  }

  public get bookDate(): number {
    return this._bookDate;
  }

  public set bookDate(value: number) {
    this._bookDate = value;
  }

  public get fieldId(): string {
    return this._fieldId;
  }

  public set fieldId(value: string) {
    this._fieldId = value;
  }

  public get userId(): string {
    return this._userId;
  }

  public set userId(value: string) {
    this._userId = value;
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }
}
