// services/assessmentService.js
const { db } = require("../config/firebaseConfig");

const createAssessment = async (assessmentData) => {
  const newAssessment = await db.collection("assessments").add(assessmentData);
  return { id: newAssessment.id, ...assessmentData };
};

const getAssessmentsByLesson = async (lessonId) => {
  const snapshot = await db.collection("assessments").where("lessonId", "==", lessonId).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const updateAssessment = async (id, assessmentData) => {
  await db.collection("assessments").doc(id).update(assessmentData);
  return { id, ...assessmentData };
};

const deleteAssessment = async (id) => {
  await db.collection("assessments").doc(id).delete();
};

module.exports = { createAssessment, getAssessmentsByLesson, updateAssessment, deleteAssessment };
