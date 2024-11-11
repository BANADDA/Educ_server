// models/parentModel.js
const Joi = require("joi");

const parentSchema = Joi.object({
  userId: Joi.string().required(),
  studentIds: Joi.array().items(Joi.string()).required() // Array of student IDs
});

module.exports = parentSchema;
