// routes/subjectRoutes.js
const express = require("express");
const { createSubject, getSubjects } = require("../controllers/subjectController");
const validate = require("../middleware/validationMiddleware");
const subjectSchema = require("../models/subjectModel");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getSubjects);
router.post("/", authMiddleware, validate(subjectSchema), createSubject);

module.exports = router;
