// app.js
const express = require("express");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const { authMiddleware } = require("./middleware/authMiddleware");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies
app.use(authMiddleware); // Apply authentication globally (optional)

// Routes
app.use("/api", routes); // Mount all routes under /api

// Error handling middleware
app.use(errorHandler);

module.exports = app;
