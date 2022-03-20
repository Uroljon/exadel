const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
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
    currency: {
        type: String,
        required: true
    },
    pay_day: {
        type: Number
    },
    category: {
        type: String 
    },
    user_id: mongoose.ObjectId,
    account_id: mongoose.ObjectId
}, {
    timestamps: true
});
subscriptionSchema.post("save", function (doc) {
    console.log(`${doc.email} has been saved`)
})
module.exports = mongoose.model("Users", subscriptionSchema)