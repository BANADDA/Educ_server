// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
  
    res.status(err.status || 500).json({
      error: {
        message: err.message || "Internal Server Error",
        details: err.details || null
      }
    });
  };
  
  module.exports = errorHandler;
  