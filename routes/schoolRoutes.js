// routes/schoolRoutes.js
const express = require("express");
const { getSchools, createSchool } = require("../controllers/schoolController");
const validate = require("../middleware/validationMiddleware");
const schoolSchema = require("../models/schoolModel");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getSchools);
router.post("/", authMiddleware, validate(schoolSchema), createSchool);

module.exports = router;
