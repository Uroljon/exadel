const { create_token } = require("../modules/jwt");

const Users = require("../models/users")

module.exports = class {
    static async login(req, res) {
        const { email, password } = req.body;
        let user = await Users.findOne({
            email: email,
            password: password
        })
        if (user) {
            let token = create_token({
                user_id: user._id,
                email,
                role: user.role,
            })
            // res.cookie("auth", token) //I'm not setting jwt token to cookie
            res.cookie("user_id", user._id) //I'm not setting jwt token to cookie
            res.status(201).json({
                ok: true,
                token
            })
        } else {
            res.status(403).json({
                ok: false,
                message: `Username or password incorrect.`
            })
        }
    }
    static logout(req, res) {//this route doesn't work mainly because I didn't implement cookies
        // if (req.cookies.auth) {
        //     // res.clearCookie("auth") // remove cookie to break session
        //     res.status(200).json({
        //         ok: true,
        //         message: `User logged out!`
        //     })
        // } else {
        //     res.status(403).json({
        //         ok: false,
        //         message: "You are not logged in You idiot!"
        //     })
        // }
    }
}