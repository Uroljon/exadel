const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    title: {
        type: String // check uniqueness within creation
    },
    amount: {
        type: Number,
        default: 0
    },
    description: {
        type: String 
    },
    type: {
        type: String 
    },
    pay_day: {
        type: Number
    },
    category_id: mongoose.ObjectId,
    account_id: mongoose.ObjectId
}, {
    timestamps: true
});
transactionSchema.post("save", function (doc) {
    console.log(`${doc.email} has been saved`)
})
module.exports = mongoose.model("Users", transactionSchema)