const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String
    },
    country: {
        type: String
    },
    accounts: {
        id: {
            type: mongoose.ObjectId
        },
        title: {
            type: String
        },
        amount: {
            type: Number,
            default: 0
        },
        currency: {
            type: String
        },
        description: {
            type: String 
        }
    },
    categories: {
        id: {
            type: mongoose.ObjectId
        },
        title: {
            type: String
        },
        type: {
            type: String
        }
    }   
}, {
    timestamps: true
});
userSchema.post("save", function (doc) {
    console.log(`${doc.email} has been saved`)
})
module.exports = mongoose.model("Users", userSchema)