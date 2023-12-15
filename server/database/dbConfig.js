// database related configurations goes here

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBconncetion = async () => {
    const MONGO_URI = process.env.MONGO_URI
    try {
        //conncet database
        await mongoose.connect(`${MONGO_URI}`);
        console.log('Database connected successfully');

    } catch (error) {
        console.log('error connecting database' , error.message);
    }
}

export default DBconncetion;