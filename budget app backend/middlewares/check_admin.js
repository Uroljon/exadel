module.exports = function (req, res, next) {
    // check whether user has admin token on its cookie
    let users = require("../mock_data/users.js")
    console.log(req.headers)
    if(false){
        res.json({
            ok: false,
            message: "You need to be an admin"
        })
    }
    // next()
}