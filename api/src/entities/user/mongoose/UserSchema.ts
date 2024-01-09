import { model, Schema } from "mongoose";
import { ROLE } from "../../../utils";
import { IUserSchema } from "../../../utils/interfaces/schema/UserSchema";

const UserSchema = new Schema({
  name_: { required: true, type: String },
  email: { type: String, unique: true },
  password: { required: true, type: String },
  role: { type: String, enum: Object.values(ROLE) },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

export const UserModel = model<IUserSchema>("User", UserSchema);
