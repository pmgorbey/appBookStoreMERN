import express from 'express';
import cors from 'cors';
import bookRoute from './routes/bookRoute.js';

const app = express();

// Middleware for parsing request body JSON
app.use(express.json());
app.use(cors());

app.use('/books', bookRoute);


export default app;

