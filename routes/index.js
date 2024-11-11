// routes/index.js
const express = require("express");

const assessmentRoutes = require("./assessmentRoutes");
const lessonRoutes = require("./lessonRoutes");
const levelRoutes = require("./levelRoutes");
const parentRoutes = require("./parentRoutes");
const progressRoutes = require("./progressRoutes");
const schoolRoutes = require("./schoolRoutes");
const studentRoutes = require("./studentRoutes");
const subjectRoutes = require("./subjectRoutes");
const tutorRoutes = require("./tutorRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.use("/assessments", assessmentRoutes);
router.use("/lessons", lessonRoutes);
router.use("/levels", levelRoutes);
router.use("/parents", parentRoutes);
router.use("/progress", progressRoutes);
router.use("/schools", schoolRoutes);
router.use("/students", studentRoutes);
router.use("/subjects", subjectRoutes);
router.use("/tutors", tutorRoutes);
router.use("/users", userRoutes);

module.exports = router;
