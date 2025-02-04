const express = require('express');
const { addBook, getBooks } = require('../controllers/bookController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const router = express.Router();
router.post('/', protect, adminOnly, addBook);
router.get('/', protect, getBooks);
module.exports = router;