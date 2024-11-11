// models/levelModel.js
const Joi = require("joi");

const levelSchema = Joi.object({
  schoolId: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional(),
  order: Joi.number().required()
});

module.exports = levelSchema;
