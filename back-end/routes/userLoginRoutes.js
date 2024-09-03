import express from 'express';
const router = express.Router();

import userLoginController from "../controllers/userLoginController.js";

router.post("/login", userLoginController.login);

export default router;