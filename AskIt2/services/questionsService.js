const client = require('../db.js');
require('dotenv').config();
// Fetch paginated documents
const db_name=process.env.DB_NAME;
const collection_name=process.env.COLLECTION_NAME;

const fetchDocuments = async (skip, limit) => {
  const database = client.db(db_name); // Replace with your DB name
  const collection = database.collection(collection_name); // Replace with your collection name
  
  return collection.find({}).skip(skip).limit(limit).toArray();
};

// Get total number of documents
const getDocumentCount = async () => {
  const database = client.db(process.env.DB_NAME);
  const collection = database.collection(process.env.COLLECTION_NAME);
  return collection.countDocuments();
};

//export
module.exports = {
  fetchDocuments,
  getDocumentCount,
};
