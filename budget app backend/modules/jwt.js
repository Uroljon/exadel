const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports.create_token = function (payload) {
    return jwt.sign(payload, JWT_SECRET)
}
module.exports.check_token = function (token) {
    try {
        jwt.verify(token, JWT_SECRET); //if invalid, throws Error
        return true
    } catch (e) {
        return false //JsonWebTokenError
    }
}