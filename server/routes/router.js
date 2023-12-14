//handels all the routes of frontend

import express from 'express';
import { uploadImage , getImage} from '../controller/imageController.js';
import upload from '../utils/uplode.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

export default router;

