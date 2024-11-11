// utils/firebaseHelpers.js
const { db } = require("../config/firebaseConfig");

// Helper to fetch a document by ID from a specified collection
const getDocumentById = async (collection, id) => {
  const doc = await db.collection(collection).doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

// Helper to add a new document to a specified collection
const addDocument = async (collection, data) => {
  const doc = await db.collection(collection).add(data);
  return { id: doc.id, ...data };
};

// Helper to update an existing document in a specified collection
const updateDocument = async (collection, id, data) => {
  await db.collection(collection).doc(id).update(data);
  return { id, ...data };
};

// Helper to delete a document by ID from a specified collection
const deleteDocument = async (collection, id) => {
  await db.collection(collection).doc(id).delete();
};

module.exports = { getDocumentById, addDocument, updateDocument, deleteDocument };
