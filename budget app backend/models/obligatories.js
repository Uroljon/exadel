const mongoose = require("mongoose");

const obligatorySchema = new mongoose.Schema({
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
    user_id: mongoose.ObjectId
}, {
    timestamps: true
});
obligatorySchema.post("save", function (doc) {
    console.log(`${doc.title} has been saved`)
})
module.exports = mongoose.model("Obligatories", obligatorySchema)