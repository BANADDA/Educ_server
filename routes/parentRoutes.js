// routes/parentRoutes.js
const express = require("express");
const { createParent, getParentById, updateParent, getChildrenByParent } = require("../controllers/parentController");
const validate = require("../middleware/validationMiddleware");
const parentSchema = require("../models/parentModel");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:id", authMiddleware, getParentById);
router.get("/:id/children", authMiddleware, getChildrenByParent);
router.post("/", authMiddleware, validate(parentSchema), createParent);
router.put("/:id", authMiddleware, validate(parentSchema), updateParent);

module.exports = router;
