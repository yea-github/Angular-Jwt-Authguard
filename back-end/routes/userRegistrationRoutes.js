import express from 'express';
const router = express.Router();

import userRegistrationController from "../controllers/userRegistrationController.js";


router.post('/register', userRegistrationController.register);

export default router;