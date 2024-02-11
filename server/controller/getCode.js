import File from '../models/file.js';
import dotenv from 'dotenv';

dotenv.config();

export const getCode = async (req, res) => {
    try {
        const { code } = req.params; // Destructure code from req.params
        if (!code) {
            return res.status(400).json({ error: 'Code parameter missing' });
        }

        // Perform database query to retrieve the file record
        const file = await File.findOne({ code });

        if (!file) {
            return res.status(404).json({ error: 'File not found' });
        }

        // Access the code from the file record and send it in the response
        const fileCode = file.code;
        res.json({ code: fileCode });
    } catch (error) {
        console.error('Error retrieving code from the database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
