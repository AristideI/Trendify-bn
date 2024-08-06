import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { app, server } from './socket.io/socket';
import { HOST, PORT } from './config/config';
import connectDB from './db/connectDB';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).json({ HERE: 'Hello world!' });
});

const port = Number(PORT);
const host = HOST;

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
    connectDB();
});
