const { check_token } = require("../modules/jwt")

module.exports = function (req, res, next) {
    // check whether user has admin token on its cookie
    let token = check_token(req.cookies.token)

    console.log(req.headers)
    if(token.role !== "admin" || token.role !== "owner"){
        res.json({
            ok: false,
            message: "You need to be an admin"
        })
    }else{
        next()
    }
}
/**This middleware should check admin authorization. But it doesn't have acccess to token right now */