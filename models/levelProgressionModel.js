// models/levelProgressionModel.js
const Joi = require("joi");

const levelProgressionSchema = Joi.object({
  studentId: Joi.string().required(),
  fromLevelId: Joi.string().required(),
  toLevelId: Joi.string().required(),
  progressionDate: Joi.date().required(),
  averageScore: Joi.number().required(),
  reason: Joi.string().optional()
});

module.exports = levelProgressionSchema;
