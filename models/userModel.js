// models/userModel.js
const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  role: Joi.string().valid("student", "parent", "tutor").required(),
  schoolId: Joi.string().required(),
  displayName: Joi.string().required(),
  createdAt: Joi.date().default(Date.now)
});

module.exports = userSchema;
