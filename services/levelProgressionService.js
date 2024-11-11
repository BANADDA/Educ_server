// services/levelProgressionService.js
const { db } = require("../config/firebaseConfig");

const createLevelProgression = async (progressionData) => {
  const newProgression = await db.collection("levelProgressions").add(progressionData);
  return { id: newProgression.id, ...progressionData };
};

const getLevelProgressionsByStudent = async (studentId) => {
  const snapshot = await db.collection("levelProgressions").where("studentId", "==", studentId).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

module.exports = { createLevelProgression, getLevelProgressionsByStudent };
