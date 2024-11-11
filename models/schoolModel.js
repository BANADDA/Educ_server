// models/schoolModel.js
const Joi = require("joi");

const schoolSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  contactInfo: Joi.object({
    phone: Joi.string().required(),
    email: Joi.string().email().required()
  }).required()
});

module.exports = schoolSchema;
