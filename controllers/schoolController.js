// controllers/schoolController.js
const { db } = require("../config/firebaseConfig");

exports.getSchools = async (req, res) => {
  try {
    const snapshot = await db.collection("schools").get();
    const schools = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve schools." });
  }
};

exports.createSchool = async (req, res) => {
  try {
    const schoolData = req.body;
    const newSchool = await db.collection("schools").add(schoolData);
    res.status(201).json({ id: newSchool.id, ...schoolData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create school." });
  }
};
