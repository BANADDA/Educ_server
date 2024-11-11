// services/userService.js
const { db } = require("../config/firebaseConfig");

const createUser = async (userData) => {
  const newUser = await db.collection("users").add(userData);
  return { id: newUser.id, ...userData };
};

const getUserById = async (id) => {
  const userDoc = await db.collection("users").doc(id).get();
  return userDoc.exists ? { id: userDoc.id, ...userDoc.data() } : null;
};

const updateUser = async (id, userData) => {
  await db.collection("users").doc(id).update(userData);
  return { id, ...userData };
};

const deleteUser = async (id) => {
  await db.collection("users").doc(id).delete();
};

module.exports = { createUser, getUserById, updateUser, deleteUser };
