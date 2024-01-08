import Joi from "joi";

export const FieldPostPayloadSchema = Joi.object({
  title: Joi.string().required(),
  address: Joi.string().required(),
  description: Joi.string().optional(),
  extraInfo: Joi.string().optional(),
  openingTime: Joi.number().required(),
  closingTime: Joi.number().required(),
  priceHourly: Joi.number().required(),
  photos: Joi.array().items(Joi.string()).optional(),
});
