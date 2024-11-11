// controllers/subjectController.js
const { db } = require("../config/firebaseConfig");

exports.getSubjects = async (req, res) => {
  try {
    const snapshot = await db.collection("subjects").get();
    const subjects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve subjects." });
  }
};

exports.createSubject = async (req, res) => {
  try {
    const subjectData = req.body;
    const newSubject = await db.collection("subjects").add(subjectData);
    res.status(201).json({ id: newSubject.id, ...subjectData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create subject." });
  }
};
