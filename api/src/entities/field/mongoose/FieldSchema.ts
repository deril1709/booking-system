import { Schema, model } from "mongoose";

const FieldSchema = new Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  photos: [String],
  description: { type: String, required: false },
  extraInfo: { type: String, required: false },
  openingTime: { type: Number, required: true },
  closingTime: { type: Number, required: true },
  priceHourly: { type: Number, required: true },
});

export const FieldModel = model("Field", FieldSchema);
