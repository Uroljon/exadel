const { PORT, JWT_SECRET } = require("./config");
const express = require("express");
const app = express()
const fs = require("fs")
const path = require("path");
const passport = require("passport")
const jwtStrategy = require("./modules/passport-jwt")
// I DID NOT WANT TO USE passport.js because its configuration was terribly confusing. We could just use cookie to store jwt. By the way it is the same as storing "Bearer jwt_token" in "Authorization" header. No complicated stuff likejwtTStrategy. passport.js maybe useful with other authentication methods like google/instagram auth. Do you understand what I mean ? I cannot digest why we are using passport stuff. I understand what Cookie is and I don't think it's a frontend stuff (as many other dev's are saying). Actually it's a backend stuff. I'm unhappy with the fact that we are blindly learning (looking through) ready-made libraries without knowing what is actually happening or why "this_package" was used "here"

// middlewares
app.use(express.json()); //to parse body's json
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
// const cookie_parser = require("cookie-parser")
// app.use(cookie_parser()) //to work with jwt in Cookie

passport.use(jwtStrategy)
let auth = passport.authenticate("jwt", {session: false})
// how to use this middleware in specific route inside routes folder ?

// importing all routers
fs.readdir(path.join(__dirname, "routes"), (err, files) => {
    files.forEach(file => {
        const {endpoint, router} = require(path.join(__dirname, "routes", file))
        if(endpoint && router) {
            if(endpoint !== "/auth"){
                app.use(endpoint, auth, router)
            }else{
                app.use(endpoint, router)
            }
        }
    })
})

app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`))