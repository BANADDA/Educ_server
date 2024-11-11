// utils/errorHandlers.js

// Handle 404 errors
const notFoundHandler = (req, res, next) => {
    res.status(404).json({ error: "Resource not found" });
  };
  
  // General error handler
  const generalErrorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(err.status || 500).json({
      error: err.message || "Internal Server Error",
      details: err.details || null
    });
  };
  
  // Custom error response utility
  const createErrorResponse = (status, message, details = null) => ({
    status,
    message,
    details
  });
  
  module.exports = { notFoundHandler, generalErrorHandler, createErrorResponse };
  