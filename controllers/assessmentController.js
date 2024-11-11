// controllers/assessmentController.js
const { db } = require("../config/firebaseConfig");

exports.getAssessmentsByLesson = async (req, res) => {
  try {
    const { lessonId } = req.query;
    const snapshot = await db.collection("assessments").where("lessonId", "==", lessonId).get();
    const assessments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(assessments);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve assessments" });
  }
};

exports.createAssessment = async (req, res) => {
  try {
    const assessmentData = req.body;
    const newAssessment = await db.collection("assessments").add(assessmentData);
    res.status(201).json({ id: newAssessment.id, ...assessmentData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create assessment" });
  }
};

exports.updateAssessment = async (req, res) => {
  try {
    const { id } = req.params;
    const assessmentData = req.body;
    await db.collection("assessments").doc(id).update(assessmentData);
    res.status(200).json({ id, ...assessmentData });
  } catch (error) {
    res.status(500).json({ error: "Failed to update assessment" });
  }
};

exports.deleteAssessment = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("assessments").doc(id).delete();
    res.status(200).json({ message: "Assessment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete assessment" });
  }
};
