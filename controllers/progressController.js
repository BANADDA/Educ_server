// controllers/progressController.js
const { db } = require("../config/firebaseConfig");

exports.getProgressByStudentAndLesson = async (req, res) => {
  try {
    const { studentId, lessonId } = req.query;
    const snapshot = await db
      .collection("studentProgress")
      .where("studentId", "==", studentId)
      .where("lessonId", "==", lessonId)
      .get();
    const progress = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve student progress" });
  }
};

exports.createOrUpdateProgress = async (req, res) => {
  try {
    const { studentId, lessonId } = req.body;
    const progressData = req.body;

    // Check if a progress entry already exists
    const snapshot = await db
      .collection("studentProgress")
      .where("studentId", "==", studentId)
      .where("lessonId", "==", lessonId)
      .get();

    if (!snapshot.empty) {
      // Update the existing progress entry
      const progressId = snapshot.docs[0].id;
      await db.collection("studentProgress").doc(progressId).update(progressData);
      res.status(200).json({ id: progressId, ...progressData });
    } else {
      // Create a new progress entry
      const newProgress = await db.collection("studentProgress").add(progressData);
      res.status(201).json({ id: newProgress.id, ...progressData });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create or update progress" });
  }
};
