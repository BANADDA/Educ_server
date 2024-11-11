// models/studentModel.js
const Joi = require("joi");

const studentSchema = Joi.object({
  userId: Joi.string().required(),
  currentLevelId: Joi.string().required(),
  parentId: Joi.string().optional(),
  enrollmentDate: Joi.date().required(),
  status: Joi.string().valid("active", "inactive").required()
});

module.exports = studentSchema;
