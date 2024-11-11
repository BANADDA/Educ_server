// services/lessonService.js
const { db } = require("../config/firebaseConfig");

const createLesson = async (lessonData) => {
  const newLesson = await db.collection("lessons").add(lessonData);
  return { id: newLesson.id, ...lessonData };
};

const getLessonsBySubjectAndLevel = async (subjectId, levelId) => {
  const snapshot = await db
    .collection("lessons")
    .where("subjectId", "==", subjectId)
    .where("levelId", "==", levelId)
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const updateLesson = async (id, lessonData) => {
  await db.collection("lessons").doc(id).update(lessonData);
  return { id, ...lessonData };
};

const deleteLesson = async (id) => {
  await db.collection("lessons").doc(id).delete();
};

module.exports = { createLesson, getLessonsBySubjectAndLevel, updateLesson, deleteLesson };
