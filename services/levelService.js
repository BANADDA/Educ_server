// services/levelService.js
const { db } = require("../config/firebaseConfig");

const createLevel = async (levelData) => {
  const newLevel = await db.collection("levels").add(levelData);
  return { id: newLevel.id, ...levelData };
};

const getLevelsBySchool = async (schoolId) => {
  const snapshot = await db.collection("levels").where("schoolId", "==", schoolId).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

module.exports = { createLevel, getLevelsBySchool };
