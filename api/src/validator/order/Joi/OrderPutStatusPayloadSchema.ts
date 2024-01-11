import Joi from "joi";

export const OrderPutStatusPayloadSchema = Joi.object({
  status: Joi.boolean().required(),
});
