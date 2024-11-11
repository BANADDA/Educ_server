// controllers/studentController.js
const { db } = require("../config/firebaseConfig");

exports.getStudentsByLevel = async (req, res) => {
  try {
    const { levelId } = req.query;
    const snapshot = await db.collection("students").where("currentLevelId", "==", levelId).get();
    const students = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve students" });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const studentData = req.body;
    const newStudent = await db.collection("students").add(studentData);
    res.status(201).json({ id: newStudent.id, ...studentData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create student" });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentData = req.body;
    await db.collection("students").doc(id).update(studentData);
    res.status(200).json({ id, ...studentData });
  } catch (error) {
    res.status(500).json({ error: "Failed to update student" });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("students").doc(id).delete();
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete student" });
  }
};
