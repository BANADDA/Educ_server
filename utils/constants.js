// utils/constants.js

// Define user roles
const ROLES = {
  STUDENT: "student",
  PARENT: "parent",
  TUTOR: "tutor",
  ADMIN: "admin"
};

// Define possible progress statuses for lessons
const PROGRESS_STATUS = {
  NOT_STARTED: "not_started",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed"
};

// Define assessment question types
const QUESTION_TYPES = {
  MULTIPLE_CHOICE: "multiple_choice",
  TRUE_FALSE: "true_false",
  ESSAY: "essay"
};

// Export constants
module.exports = { ROLES, PROGRESS_STATUS, QUESTION_TYPES };
