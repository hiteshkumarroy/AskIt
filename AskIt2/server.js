const express = require('express');
const cors = require('cors');
require('dotenv').config();

const questionsRoutes = require('./routes/questions.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/questions', questionsRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
