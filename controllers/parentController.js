// controllers/parentController.js
const { db } = require("../config/firebaseConfig");

exports.getParentById = async (req, res) => {
  try {
    const { id } = req.params;
    const parentDoc = await db.collection("parents").doc(id).get();
    if (parentDoc.exists) {
      res.status(200).json({ id: parentDoc.id, ...parentDoc.data() });
    } else {
      res.status(404).json({ error: "Parent not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve parent" });
  }
};

exports.createParent = async (req, res) => {
  try {
    const parentData = req.body;
    const newParent = await db.collection("parents").add(parentData);
    res.status(201).json({ id: newParent.id, ...parentData });
  } catch (error) {
    res.status(500).json({ error: "Failed to create parent" });
  }
};

exports.updateParent = async (req, res) => {
  try {
    const { id } = req.params;
    const parentData = req.body;
    await db.collection("parents").doc(id).update(parentData);
    res.status(200).json({ id, ...parentData });
  } catch (error) {
    res.status(500).json({ error: "Failed to update parent" });
  }
};

exports.getChildrenByParent = async (req, res) => {
  try {
    const { id } = req.params;
    const parentDoc = await db.collection("parents").doc(id).get();
    if (!parentDoc.exists) return res.status(404).json({ error: "Parent not found" });

    const { studentIds } = parentDoc.data();
    const studentDocs = await Promise.all(
      studentIds.map(studentId => db.collection("students").doc(studentId).get())
    );
    const students = studentDocs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve children" });
  }
};
