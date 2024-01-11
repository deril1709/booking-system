import Joi from "joi";

export const FieldPutPayloadSchema = Joi.object({
  title: Joi.string().optional(),
  address: Joi.string().optional(),
  description: Joi.string().optional(),
  extraInfo: Joi.string().optional(),
  openingTime: Joi.number().optional(),
  closingTime: Joi.number().optional(),
  priceHourly: Joi.number().optional(),
  photos: Joi.array().items(Joi.string()).optional(),
});
