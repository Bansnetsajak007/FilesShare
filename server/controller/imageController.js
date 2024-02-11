import File from '../models/file.js';
import dotenv from 'dotenv';
import { generateRandomCoode } from '../utils/randCode.js';

dotenv.config();


export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
        code: await generateRandomCoode(),
    }
    
    try {
        const file = await File.create(fileObj);
        response.status(200).json({ code: file.code});
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}

export const getImage = async (request, response) => {

    try {
        const file = await File.findOne({ code: request.params.code });
        
        if (!file) {
            return response.status(404).json({ msg: 'File not found.' });
        }

        // file.downloadCount++;
        // await file.save();

        // response.download(file.path, file);
        // console.log(file);
        response.status(200).send(file);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: 'Internal Server Error' });
    }

}

export const downloadfile = async (req , res) => {
    try {
        const file = await File.findById(req.params._id);
        file.downloadCount++;
        await file.save();
        res.download(file.path, file.name);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
}