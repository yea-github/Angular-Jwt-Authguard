import express from 'express';
const router = express.Router();

import initController from '../controllers/initController.js';

// Public route
router.get('/init', initController.helloApp);

export default router;

