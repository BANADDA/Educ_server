// routes/studentRoutes.js
const express = require("express");
const { createStudent, getStudentsByLevel, updateStudent, deleteStudent } = require("../controllers/studentController");
const validate = require("../middleware/validationMiddleware");
const studentSchema = require("../models/studentModel");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getStudentsByLevel);
router.post("/", authMiddleware, validate(studentSchema), createStudent);
router.put("/:id", authMiddleware, validate(studentSchema), updateStudent);
router.delete("/:id", authMiddleware, deleteStudent);

module.exports = router;
