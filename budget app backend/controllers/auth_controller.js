module.exports = class{
    static login_POST(req, res){
        const { email, password } = req.body;
        // logic : check email and password 
        let verified = true
    
        if (verified) {
            // res.cookie("token", "someToken") //we could send some cookie
            res.status(201).json({
                ok: true,
                message: `Welcome ${email} [${password}]!`
            })
        } else {
            res.status(403).json({
                ok: false,
                message: `Incorrect email of password`
            })
        }
    }
    static logout_POST(req, res){
        // logic : remove cookie to break session
        // res.clearCookie("token")
    
        res.status(200).json({
            ok: true,
            message: `User left!`
        })
    }
}