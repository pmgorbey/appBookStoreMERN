import express from 'express';
import { validateBody, getAllBooks, getOneBook, createBook, updateBook, deleteBook } from '../controllers/bookController.js';

const router = express.Router();

router.route('/')
    .get(getAllBooks)
    .post(validateBody, createBook)

router.route('/:id')
    .get(getOneBook)
    .put(validateBody, updateBook)
    .delete(deleteBook)


export default router;