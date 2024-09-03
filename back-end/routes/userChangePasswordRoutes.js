import express from 'express';
const router = express.Router();

import userChangePasswordController from "../controllers/userChangePasswordController.js";
import checkAuthMiddleware from "../middlewares/checkAuthMiddleware.js";


// Route - to protect a route using middleware
router.use("/change-password", checkAuthMiddleware.checkUserAuth);
router.post("/change-password", userChangePasswordController.changePassword);

export default router;