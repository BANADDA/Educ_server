// routes/levelRoutes.js
const express = require("express");
const { createLevel, getLevels } = require("../controllers/levelController");
const validate = require("../middleware/validationMiddleware");
const levelSchema = require("../models/levelModel");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getLevels);
router.post("/", authMiddleware, validate(levelSchema), createLevel);

module.exports = router;
