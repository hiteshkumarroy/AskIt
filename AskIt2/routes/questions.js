const express = require('express');
//importing V
const { fetchDocuments, getDocumentCount } = require('../services/questionsService');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page, default to 1
    const limit = parseInt(req.query.limit) || 10; // Results per page, default to 10
    const skip = (page - 1) * limit; // Skip calculation

    const documents = await fetchDocuments(skip, limit);

    res.json({
      data: documents,
      currentPage: page,
      pageSize: limit,
      totalPages: Math.ceil((await getDocumentCount()) / limit), // Total pages
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions.' });
  }
});

module.exports = router;
