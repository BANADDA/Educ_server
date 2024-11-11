// services/schoolService.js
const { db } = require("../config/firebaseConfig");

const createSchool = async (schoolData) => {
  const newSchool = await db.collection("schools").add(schoolData);
  return { id: newSchool.id, ...schoolData };
};

const getSchools = async () => {
  const snapshot = await db.collection("schools").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

module.exports = { createSchool, getSchools };
