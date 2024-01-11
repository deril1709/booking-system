import { Schema } from "mongoose";
import { ROLE } from "../..";

export interface IUserSchema {
  id: Schema.Types.ObjectId;
  name_: string;
  email: string;
  password: string;
  role: string | ROLE;
  orders?: Schema.Types.ObjectId[];
}
