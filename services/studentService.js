// services/studentService.js
const { db } = require("../config/firebaseConfig");

const createStudent = async (studentData) => {
  const newStudent = await db.collection("students").add(studentData);
  return { id: newStudent.id, ...studentData };
};

const getStudentsByLevel = async (levelId) => {
  const snapshot = await db.collection("students").where("currentLevelId", "==", levelId).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const updateStudent = async (id, studentData) => {
  await db.collection("students").doc(id).update(studentData);
  return { id, ...studentData };
};

const deleteStudent = async (id) => {
  await db.collection("students").doc(id).delete();
};

module.exports = { createStudent, getStudentsByLevel, updateStudent, deleteStudent };
