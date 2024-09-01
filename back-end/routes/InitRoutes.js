import express from 'express';
const router = express.Router();

import InitController from '../controllers/InitController.js';

// Public route
router.get('/init', InitController.helloApp);

export default router;

