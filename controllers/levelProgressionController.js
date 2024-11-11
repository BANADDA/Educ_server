// controllers/levelProgressionController.js
const { db } = require("../config/firebaseConfig");

exports.getLevelProgressionsByStudent = async (req, res) => {
  try {
    const { studentId } = req.query;
    const snapshot = await db.collection("levelProgressions").where("studentId", "==", studentId).get();
    const progressions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(progressions);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve level progressions" });
  }
};

exports.createLevelProgression = async (req, res) => {
  try {
    const progressionData = req.body;
    const newProgression = await db.collection("levelProgressions").add(progressionData);
    res.status(201).json({ id: newProgression.id, ...progressionData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create level progression" });
  }
};
