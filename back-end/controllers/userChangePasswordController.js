import bcrypt from "bcrypt";
import UserModel from "../models/user.js";

class userChangePasswordController {
    static changePassword = async (req, res) => {
        const { password, password_confirmation } = req.body;
        if (password && password_confirmation) {
            if (password !== password_confirmation) {
                res.send({ "status": "failed", "message": "New Password and Confirm New Password doesn't match" });
            } else {
                const salt = await bcrypt.genSalt(10);
                const newHashPassword = await bcrypt.hash(password, salt);
                await UserModel.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } }, null);
                res.send({ "status": "success", "message": "Password changed successfully" });
            }
        } else {
            res.send({ "status": "failed", "message": "All Fields are Required" });
        }
    }
}

export default userChangePasswordController;