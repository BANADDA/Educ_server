// config/securityRules.js
module.exports = {
    rules: {
      ".read": "auth != null",
      ".write": "auth != null && auth.token.role == 'admin'",
      "schools": {
        ".read": "auth != null",
        ".write": "auth != null && auth.token.role == 'admin'"
      }
    }
  };
  