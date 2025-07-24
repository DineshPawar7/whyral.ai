import express from 'express';
import { getVideoTags } from '../controllers/youtube.controller.js';


const router = express.Router();
router.post('/extract-tags', getVideoTags);

export default router;
