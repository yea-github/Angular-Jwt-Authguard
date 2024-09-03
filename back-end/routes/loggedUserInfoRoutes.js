import express from 'express';
const router = express.Router();

import loggedUserInfoController from "../controllers/loggedUserInfoController.js";
import checkAuthMiddleware from "../middlewares/checkAuthMiddleware.js";

// Protect routes using middleware
router.use("/logged-user", checkAuthMiddleware.checkUserAuth);
router.get("/logged-user", loggedUserInfoController.loggedUserInfo);

export default router;