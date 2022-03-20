const mongoose = require("mongoose");
const { MONGO_URL } = require("../config");

module.exports = function () {
    mongoose.connect(MONGO_URL).then(_=>{
        console.log("db connected")
    }).catch(err=>{
        console.log(err)
    })
}