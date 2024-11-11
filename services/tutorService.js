// services/tutorService.js
const { db } = require("../config/firebaseConfig");

const createTutor = async (tutorData) => {
  const newTutor = await db.collection("tutors").add(tutorData);
  return { id: newTutor.id, ...tutorData };
};

const getTutorById = async (id) => {
  const tutorDoc = await db.collection("tutors").doc(id).get();
  return tutorDoc.exists ? { id: tutorDoc.id, ...tutorDoc.data() } : null;
};

const getSubjectsByTutor = async (subjectIds) => {
  const subjectDocs = await Promise.all(
    subjectIds.map(subjectId => db.collection("subjects").doc(subjectId).get())
  );
  return subjectDocs.map(doc => ({ id: doc.id, ...doc.data() }));
};

module.exports = { createTutor, getTutorById, getSubjectsByTutor };
