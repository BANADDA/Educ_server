// middleware/authMiddleware.js

const authMiddleware = (req, res, next) => {
  // Temporary bypass for testing
  console.warn("Authentication bypassed for testing purposes!");
  req.user = { uid: "testUser", role: "admin" }; // Mock user data
  next();
};

// Role-based access control (optional)
const requireRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ error: `Access forbidden: Requires ${role} role` });
  }
  next();
};

module.exports = { authMiddleware, requireRole };


// // middleware/authMiddleware.js
// const { admin } = require("../config/firebaseConfig");

// const authMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
  
//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized access" });
//   }

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(token);
//     req.user = decodedToken; // Attaches the decoded token (user data) to req.user
//     next();
//   } catch (error) {
//     res.status(403).json({ error: "Invalid or expired token" });
//   }
// };

// // Role-based access control (optional)
// const requireRole = (role) => (req, res, next) => {
//   if (req.user.role !== role) {
//     return res.status(403).json({ error: `Access forbidden: Requires ${role} role` });
//   }
//   next();
// };

// module.exports = { authMiddleware, requireRole };
