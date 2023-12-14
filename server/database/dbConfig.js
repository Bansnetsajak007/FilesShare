// database related configurations goes here

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBconncetion = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@filesharingapp.liax0du.mongodb.net/?retryWrites=true&w=majority`;
    try {
        //conncet database
        await mongoose.connect(MONGO_URI);;
        console.log('Database connected successfully');

    } catch (error) {
        console.log('error connecting database' , error.message);
    }
}

export default DBconncetion;