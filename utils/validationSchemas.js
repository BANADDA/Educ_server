// utils/validationSchemas.js
const Joi = require("joi");
const { ROLES, QUESTION_TYPES, PROGRESS_STATUS } = require("./constants");

// Schema for user data validation
const userSchema = Joi.object({
  email: Joi.string().email().required(),
  role: Joi.string().valid(...Object.values(ROLES)).required(),
  schoolId: Joi.string().required(),
  displayName: Joi.string().required(),
  createdAt: Joi.date().default(Date.now)
});

// Schema for assessment data validation
const assessmentSchema = Joi.object({
  lessonId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().optional(),
  passingScore: Joi.number().required(),
  questions: Joi.array().items(
    Joi.object({
      questionId: Joi.string().required(),
      text: Joi.string().required(),
      type: Joi.string().valid(...Object.values(QUESTION_TYPES)).required(),
      options: Joi.array().items(Joi.string()).optional(),
      correctAnswer: Joi.string().optional(),
      points: Joi.number().required()
    })
  ).required()
});

// Schema for progress data validation
const progressSchema = Joi.object({
  studentId: Joi.string().required(),
  levelId: Joi.string().required(),
  lessonId: Joi.string().required(),
  status: Joi.string().valid(...Object.values(PROGRESS_STATUS)).required(),
  completedAt: Joi.date().optional()
});

// Schema for lesson data validation
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

module.exports = { userSchema, assessmentSchema, progressSchema, lessonSchema };
