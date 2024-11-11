// controllers/tutorController.js
const { db } = require("../config/firebaseConfig");

exports.getTutorById = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorDoc = await db.collection("tutors").doc(id).get();
    if (tutorDoc.exists) {
      res.status(200).json({ id: tutorDoc.id, ...tutorDoc.data() });
    } else {
      res.status(404).json({ error: "Tutor not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve tutor" });
  }
};

exports.createTutor = async (req, res) => {
  try {
    const tutorData = req.body;
    const newTutor = await db.collection("tutors").add(tutorData);
    res.status(201).json({ id: newTutor.id, ...tutorData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create tutor" });
  }
};

exports.updateTutor = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorData = req.body;
    await db.collection("tutors").doc(id).update(tutorData);
    res.status(200).json({ id, ...tutorData });
  } catch (error) {
    res.status(500).json({ error: "Failed to update tutor" });
  }
};

exports.getSubjectsByTutor = async (req, res) => {
  try {
    const { id } = req.params;
    const tutorDoc = await db.collection("tutors").doc(id).get();
    if (!tutorDoc.exists) return res.status(404).json({ error: "Tutor not found" });

    const { subjectIds } = tutorDoc.data();
    const subjectDocs = await Promise.all(
      subjectIds.map(subjectId => db.collection("subjects").doc(subjectId).get())
    );
    const subjects = subjectDocs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve subjects" });
  }
};
