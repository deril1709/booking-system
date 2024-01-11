import { Schema, model } from "mongoose";
import { BOOKING_STATUS } from "../../../utils";
import { IOrderSchema } from "../../../utils/interfaces/schema/OrderSchema";

const OrderSchema = new Schema({
  status: { type: String, default: BOOKING_STATUS.PENDING },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  duration: { type: Number, required: true },
  bookDate: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  field: { type: Schema.Types.ObjectId, ref: "Field" },
  paymentProof: { type: String, required: true },
});

export const OrderModel = model<IOrderSchema>("Order", OrderSchema);
