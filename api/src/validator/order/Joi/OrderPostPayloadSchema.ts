import Joi from "joi";

export const OrderPostPayloadSchema = Joi.object({
  bookDate: Joi.number().required(),
  duration: Joi.number().required(),
  paymentProof: Joi.string().required(),
  fieldId: Joi.string()
    .pattern(/^[a-f\d]{24}$/i)
    .required(),
});
