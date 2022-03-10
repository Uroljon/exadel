const fs = require("fs/promises");
const path = require("path");
const { create_token } = require("../modules/jwt");

module.exports = class {
    static async login(req, res) {
        const { email, password } = req.body;
        let users = await fs.readFile(path.join(__dirname, "..", "mock_data", "users.json"), { encoding: 'utf-8' })
        users = JSON.parse(users)
        let user = users.filter(user => user.email === email)[0]

        if (user) {
            if (user.password === password) {
                let token = create_token({
                    email,
                    role: user.role
                })
                // res.cookie("auth", token) //I'm setting jwt token to cookie

                res.status(201).json({
                    ok: true,
                    user,
                    message: `Welcome ${email} [${password}]!`
                })
            } else {
                res.status(403).json({
                    ok: false,
                    message: "Password incorrect"
                })
            }
        } else {
            res.status(403).json({
                ok: false,
                message: `Incorrect email`
            })
        }
    }
    static logout(req, res) {
        if (req.cookies.auth) {
            // res.clearCookie("auth") // remove cookie to break session
            res.status(200).json({
                ok: true,
                message: `User logged out!`
            })
        } else {
            res.status(403).json({
                ok: false,
                message: "You are not logged in You idiot!"
            })
        }
    }
}