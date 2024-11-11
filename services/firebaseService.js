// services/firebaseService.js
const { admin, db, bucket } = require("../config/firebaseConfig");

const getDocumentById = async (collection, id) => {
  const doc = await db.collection(collection).doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

const addDocument = async (collection, data) => {
  const doc = await db.collection(collection).add(data);
  return { id: doc.id, ...data };
};

module.exports = { getDocumentById, addDocument, admin, db, bucket };
