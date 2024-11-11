// controllers/levelController.js
const { db } = require("../config/firebaseConfig");

exports.getLevels = async (req, res) => {
  try {
    const snapshot = await db.collection("levels").get();
    const levels = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(levels);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve levels." });
  }
};

exports.createLevel = async (req, res) => {
  try {
    const levelData = req.body;
    const newLevel = await db.collection("levels").add(levelData);
    res.status(201).json({ id: newLevel.id, ...levelData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create level." });
  }
};
