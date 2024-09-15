import dotenv from 'dotenv';
dotenv.config({path: './.env'});

import mongoose from 'mongoose';
import app from './app.js';


const PORT = process.env.PORT || 5000
const DB_CONNECT = process.env.DB_CONNECT;

// DB CONNECT
mongoose.connect(DB_CONNECT)
    .then((connectObject) => {
        console.log('MongoDB connection established')
    })
    .catch((error) => {
        console.log(error);
    }
);

// SERVER START
const server = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`);
        });
    } catch(error) {
        console.log('MongoDB connection failed:', error.message);     
    }
}

server ();
