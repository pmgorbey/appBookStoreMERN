import { Book } from '../models/bookModel.js';


// MIDDLEWARE: CHECK BODY
export const validateBody = (req, res, next) => {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(400).json({
            status: 'fail',
            message: 'Not a valid a Movie data'
        });
    }

    next();
}


// CRAETE NEW ITEM
export const createBook = async (req, res) => {
    try {
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await Book.create(newBook);

        return res.status(201).send(book);
    } catch(error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    } 
} 

// GET ALL ITEMS
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch(error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    } 
} 

// GET ONE ITEM
export const getOneBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        return res.status(200).json(book);
    } catch(error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    } 
} 

// UPDATE ONE ITEM
export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({message: 'Book not found' });
        }

        return res.status(200).send({ message: 'Book update successfully' })
    } catch(error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    } 
} 

// DELETE ONE ITEM
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);;

        if (!result) {
            return res.status(404).json({message: 'Book not found' });
        }

        return res.status(200).send({ message: 'Book deleted successfully' })
    } catch(error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    } 
} 


