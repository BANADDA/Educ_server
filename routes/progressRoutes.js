// routes/progressRoutes.js
const express = require("express");
const { createOrUpdateProgress, getProgressByStudentAndLesson } = require("../controllers/progressController");
const validate = require("../middleware/validationMiddleware");
const progressSchema = require("../models/progressModel");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getProgressByStudentAndLesson);
router.post("/", authMiddleware, validate(progressSchema), createOrUpdateProgress);

module.exports = router;
