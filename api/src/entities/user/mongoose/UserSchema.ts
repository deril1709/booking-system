import { model, Schema } from "mongoose";
import { ROLE } from "../../../utils";

const UserSchema = new Schema({
  name_: { required: true, type: String },
  email: { type: String, unique: true },
  password: { required: true, type: String },
  role: { type: String, enum: Object.values(ROLE) },
});

export const UserModel = model("User", UserSchema);
