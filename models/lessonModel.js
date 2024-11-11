// models/lessonModel.js
const Joi = require("joi");

const lessonSchema = Joi.object({
  subjectId: Joi.string().required(),
  levelId: Joi.string().required(),
  tutorId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().optional(),
  order: Joi.number().required(),
  content: Joi.array().items(
    Joi.object({
      type: Joi.string().valid("text", "video", "pdf").required(),
      url: Joi.string().optional(), // For files (video, pdf)
      text: Joi.string().optional()  // For text content
    })
  ).required(),
  createdAt: Joi.date().default(Date.now),
  updatedAt: Joi.date().default(Date.now)
});

module.exports = lessonSchema;
