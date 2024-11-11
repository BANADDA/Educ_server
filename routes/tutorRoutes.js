// routes/tutorRoutes.js
const express = require("express");
const { createTutor, getTutorById, updateTutor, getSubjectsByTutor } = require("../controllers/tutorController");
const validate = require("../middleware/validationMiddleware");
const tutorSchema = require("../models/tutorModel");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:id", authMiddleware, getTutorById);
router.get("/:id/subjects", authMiddleware, getSubjectsByTutor);
router.post("/", authMiddleware, validate(tutorSchema), createTutor);
router.put("/:id", authMiddleware, validate(tutorSchema), updateTutor);

module.exports = router;
