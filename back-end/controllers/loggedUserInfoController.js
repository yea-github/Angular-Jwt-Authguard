class loggedUserInfoController{
    static loggedUserInfo = async (req, res) => {
        res.send({ "user": req.user })
    }
}

export default loggedUserInfoController;