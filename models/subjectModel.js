// models/subjectModel.js
const Joi = require("joi");

const subjectSchema = Joi.object({
  levelId: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional()
});

module.exports = subjectSchema;
