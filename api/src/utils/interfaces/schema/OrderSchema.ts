import { Schema } from "mongoose";
import { BOOKING_STATUS } from "../..";
import { UserEntity } from "../../../entities/user/UserEntity";
import { FieldEntity } from "../../../entities/field/FieldEntity";
import { IUserSchema } from "./UserSchema";
import { IFieldSchema } from "./FieldSchema";

export interface IOrderSchema {
  id: Schema.Types.ObjectId;
  status: BOOKING_STATUS;
  createdAt: Date | string;
  updatedAt: Date | string;
  duration: number;
  bookDate: number;
  user: Schema.Types.ObjectId | UserEntity | IUserSchema;
  field: Schema.Types.ObjectId | FieldEntity | IFieldSchema;
  paymentProof: string;
}
