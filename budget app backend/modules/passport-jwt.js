const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const fs = require("fs/promises");
const path = require("path")
const { JWT_SECRET } = require("../config");

let JWT_options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}
module.exports = new JWTStrategy(JWT_options, async function (payload, done) {
    let users = await fs.readFile(path.join(__dirname, "..", "mock_data", "users.json"), { encoding: 'utf-8' })
    users = JSON.parse(users)
    let user = users.filter(user => user.email === payload.email)[0]
    if (user) {
        return done(null, user);
    } else {
        return done(null, false)
    }
})