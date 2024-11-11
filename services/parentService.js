// services/parentService.js
const { db } = require("../config/firebaseConfig");

const createParent = async (parentData) => {
  const newParent = await db.collection("parents").add(parentData);
  return { id: newParent.id, ...parentData };
};

const getParentById = async (id) => {
  const parentDoc = await db.collection("parents").doc(id).get();
  return parentDoc.exists ? { id: parentDoc.id, ...parentDoc.data() } : null;
};

const getChildrenByParent = async (studentIds) => {
  const studentDocs = await Promise.all(
    studentIds.map(studentId => db.collection("students").doc(studentId).get())
  );
  return studentDocs.map(doc => ({ id: doc.id, ...doc.data() }));
};

module.exports = { createParent, getParentById, getChildrenByParent };
