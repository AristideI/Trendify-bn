import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || 'localhost';
export const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://example:27017/test';

export const SERVER = {
    HOST: HOST,
    PORT: PORT
};
