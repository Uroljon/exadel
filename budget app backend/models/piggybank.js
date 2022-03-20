const mongoose = require("mongoose");

const piggyBankSchema = new mongoose.Schema({
    title: {
        type: String, // check uniqueness within creation
        required: true
    },
    goal: {
        type: Number,
        required: true
    },
    available: {
        type: Number,
        default: 0
    },
    description: String,
    user_id: mongoose.ObjectId,
    account_id: mongoose.ObjectId
}, {
    timestamps: true
});
piggyBankSchema.post("save", function (doc) {
    console.log(`${doc.title} has been saved`)
})
module.exports = mongoose.model("Piggybank", piggyBankSchema)