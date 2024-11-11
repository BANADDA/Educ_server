// models/assessmentModel.js
const Joi = require("joi");

const assessmentSchema = Joi.object({
  lessonId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().optional(),
  passingScore: Joi.number().required(),
  questions: Joi.array().items(
    Joi.object({
      questionId: Joi.string().required(),
      text: Joi.string().required(),
      type: Joi.string().valid("multiple_choice", "true_false", "essay").required(),
      options: Joi.array().items(Joi.string()).optional(),
      correctAnswer: Joi.string().optional(),
      points: Joi.number().required()
    })
  ).required()
});

module.exports = assessmentSchema;
