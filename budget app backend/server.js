const express = require("express");
const app = express()
const fs = require("fs")
const path = require("path")

// middlewares
app.use(express.json()); //to parse body's json
app.use(express.urlencoded({ extended: true }))

// importing all routers
fs.readdir(path.join(__dirname, "routes"), (err, files) => {
    files.forEach(file => {
        const {endpoint, router} = require(path.join(__dirname, "routes", file))
    
        if(endpoint && router) app.use(endpoint, router)
    })
})

app.listen(8080, () => console.log("Server ready at http://localhost:8080"))