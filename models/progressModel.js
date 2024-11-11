// models/progressModel.js
const Joi = require("joi");

const progressSchema = Joi.object({
  studentId: Joi.string().required(),
  levelId: Joi.string().required(),
  lessonId: Joi.string().required(),
  status: Joi.string().valid("not_started", "in_progress", "completed").required(),
  completedAt: Joi.date().optional()
});

module.exports = progressSchema;
