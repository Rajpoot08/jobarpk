import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database successfully connected');
    } catch (err) {
        console.error('Database connection error:', err);
    }
};