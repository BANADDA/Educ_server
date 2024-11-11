// routes/assessmentRoutes.js
const express = require("express");
const { createAssessment, getAssessmentsByLesson, updateAssessment, deleteAssessment } = require("../controllers/assessmentController");
const validate = require("../middleware/validationMiddleware");
const assessmentSchema = require("../models/assessmentModel");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getAssessmentsByLesson);
router.post("/", authMiddleware, validate(assessmentSchema), createAssessment);
router.put("/:id", authMiddleware, validate(assessmentSchema), updateAssessment);
router.delete("/:id", authMiddleware, deleteAssessment);

module.exports = router;
