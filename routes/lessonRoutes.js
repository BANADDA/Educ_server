// routes/lessonRoutes.js
const express = require("express");
const { createLesson, getLessonsBySubjectAndLevel, updateLesson, deleteLesson } = require("../controllers/lessonController");
const validate = require("../middleware/validationMiddleware");
const lessonSchema = require("../models/lessonModel");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getLessonsBySubjectAndLevel);
router.post("/", authMiddleware, validate(lessonSchema), createLesson);
router.put("/:id", authMiddleware, validate(lessonSchema), updateLesson);
router.delete("/:id", authMiddleware, deleteLesson);

module.exports = router;
