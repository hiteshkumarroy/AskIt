const express = require('express');
const app = express();
const port = 3000;

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// POST route with data handling
app.post('/data', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required!' });
  }
  res.json({ message: `Received data for ${name}, age: ${age}` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
