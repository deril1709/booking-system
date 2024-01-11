import { Schema } from "mongoose";

export interface IFieldSchema {
  id: Schema.Types.ObjectId;
  title: string;
  address: string;
  photos?: string[];
  description?: string;
  extraInfo?: string;
  openingTime: number;
  closingTime: number;
  priceHourly: number;
  orders?: Schema.Types.ObjectId[];
}
