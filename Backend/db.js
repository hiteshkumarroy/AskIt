require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;

 // Replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = client;
