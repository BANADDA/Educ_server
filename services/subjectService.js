// services/subjectService.js
const { db } = require("../config/firebaseConfig");

const createSubject = async (subjectData) => {
  const newSubject = await db.collection("subjects").add(subjectData);
  return { id: newSubject.id, ...subjectData };
};

const getSubjectsByLevel = async (levelId) => {
  const snapshot = await db.collection("subjects").where("levelId", "==", levelId).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

module.exports = { createSubject, getSubjectsByLevel };
