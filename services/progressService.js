// services/progressService.js
const { db } = require("../config/firebaseConfig");

const createOrUpdateProgress = async (studentId, lessonId, progressData) => {
  const snapshot = await db
    .collection("studentProgress")
    .where("studentId", "==", studentId)
    .where("lessonId", "==", lessonId)
    .get();

  if (!snapshot.empty) {
    const progressId = snapshot.docs[0].id;
    await db.collection("studentProgress").doc(progressId).update(progressData);
    return { id: progressId, ...progressData };
  } else {
    const newProgress = await db.collection("studentProgress").add(progressData);
    return { id: newProgress.id, ...progressData };
  }
};

const getProgressByStudentAndLesson = async (studentId, lessonId) => {
  const snapshot = await db
    .collection("studentProgress")
    .where("studentId", "==", studentId)
    .where("lessonId", "==", lessonId)
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

module.exports = { createOrUpdateProgress, getProgressByStudentAndLesson };
