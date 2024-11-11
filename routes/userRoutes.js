// routes/userRoutes.js
const express = require("express");
const { createUser, getUserById, updateUser, deleteUser } = require("../controllers/userController");
const validate = require("../middleware/validationMiddleware");
const userSchema = require("../models/userModel");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:id", authMiddleware, getUserById);
router.post("/", authMiddleware, validate(userSchema), createUser);
router.put("/:id", authMiddleware, validate(userSchema), updateUser);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
