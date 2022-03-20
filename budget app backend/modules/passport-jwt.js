const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { JWT_SECRET } = require("../config");
const users = require("../models/users");

let JWT_options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}
module.exports = new JWTStrategy(JWT_options, async function (payload, done) {
    let user = await users.findById(payload.user_id)
    if (user) {
        return done(null, user);
    } else {
        return done(null, false)
    }
})