// yo chai mero main server ho

import express from 'express';
import router from './routes/router.js';
import cors from 'cors';
import DBconncetion from './database/dbConfig.js';
import dotenv from 'dotenv';
import File from './models/file.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT;

app.use('/', router);

DBconncetion().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`);
        console.log("listening for requests");
    })
})