import mongoose, { mongo } from 'mongoose';

import { MONGO_URI } from '../config/config';

export default async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database: ', error);
    }
}
