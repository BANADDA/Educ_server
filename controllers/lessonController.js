// controllers/lessonController.js
const { db } = require("../config/firebaseConfig");

exports.getLessonsBySubjectAndLevel = async (req, res) => {
  try {
    const { subjectId, levelId } = req.query;
    const snapshot = await db
      .collection("lessons")
      .where("subjectId", "==", subjectId)
      .where("levelId", "==", levelId)
      .get();
    const lessons = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve lessons" });
  }
};

exports.createLesson = async (req, res) => {
  try {
    const lessonData = req.body;
    const newLesson = await db.collection("lessons").add(lessonData);
    res.status(201).json({ id: newLesson.id, ...lessonData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create lesson" });
  }
};

exports.updateLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const lessonData = req.body;
    await db.collection("lessons").doc(id).update(lessonData);
    res.status(200).json({ id, ...lessonData });
  } catch (error) {
    res.status(500).json({ error: "Failed to update lesson" });
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("lessons").doc(id).delete();
    res.status(200).json({ message: "Lesson deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete lesson" });
  }
};
