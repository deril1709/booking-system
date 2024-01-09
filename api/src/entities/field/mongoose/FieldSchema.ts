import { Schema, model } from "mongoose";
import { IFieldSchema } from "../../../utils/interfaces/schema/FieldSchema";

const FieldSchema = new Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  photos: [String],
  description: { type: String, required: false },
  extraInfo: { type: String, required: false },
  openingTime: { type: Number, required: true },
  closingTime: { type: Number, required: true },
  priceHourly: { type: Number, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

export const FieldModel = model<IFieldSchema>("Field", FieldSchema);
