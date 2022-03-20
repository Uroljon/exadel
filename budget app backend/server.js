const { PORT, JWT_SECRET } = require("./config");
const express = require("express");
const app = express()
const fs = require("fs")
const path = require("path");
const passport = require("passport")
const jwtStrategy = require("./modules/passport-jwt")

const mongo_connect = require("./modules/mongo");
mongo_connect()

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