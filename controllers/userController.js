// controllers/userController.js
const { db } = require("../config/firebaseConfig");

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userDoc = await db.collection("users").doc(id).get();
    if (userDoc.exists) {
      res.status(200).json({ id: userDoc.id, ...userDoc.data() });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await db.collection("users").add(userData);
    res.status(201).json({ id: newUser.id, ...userData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    await db.collection("users").doc(id).update(userData);
    res.status(200).json({ id, ...userData });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("users").doc(id).delete();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
}
