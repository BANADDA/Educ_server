// models/tutorModel.js
const Joi = require("joi");

const tutorSchema = Joi.object({
  userId: Joi.string().required(),
  subjectIds: Joi.array().items(Joi.string()).required(), // Subjects they teach
  levelIds: Joi.array().items(Joi.string()).required(),   // Levels they teach
  qualifications: Joi.array().items(Joi.string()).optional()
});

module.exports = tutorSchema;
