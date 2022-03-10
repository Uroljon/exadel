const { check_token } = require("../modules/jwt");

module.exports = function (req, res, next) {
    // check whether user has jwt on its cookie
    let verified = check_token(req.cookies.auth)
    if(!verified){
        res.json({
            ok: false,
            message: "You need to be logged"
        })
        return
    }
    next()
}
// This middleware work very well. It checks Cookie for jwt token rather than "Authorization" in header. It doesn't need any complicated passport.js + strategies library bla bla...