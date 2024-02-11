//handels all the routes of frontend

import express from 'express';
import { uploadImage , getImage, downloadfile} from '../controller/imageController.js';
import { getCode } from '../controller/getCode.js';
import upload from '../utils/uplode.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:_id', downloadfile);
router.get('/download/:code', getImage);
router.get('/getDBcode/:code', getCode);

export default router;

