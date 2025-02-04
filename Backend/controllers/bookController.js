const Book = require('../models/Book');
exports.addBook = async (req, res) => {
    const { title, author } = req.body;
    const book = await Book.create({ title, author });
    res.json(book);
};

exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};