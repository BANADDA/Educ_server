// middleware/validationMiddleware.js
module.exports = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false }); // Validate the request body
    
    if (error) {
      const details = error.details.map(detail => detail.message); // Extract error messages
      return res.status(400).json({ error: "Validation error", details });
    }
    
    next(); // Proceed if validation succeeds
  };
  