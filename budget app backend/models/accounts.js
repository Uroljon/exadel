const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.ObjectId
    },
    title: {
        type: String,
        required: true
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
}, {
    timestamps: true
});

accountSchema.index({ user_id: 1, title: 1}, { unique: true });

accountSchema.post("save", function (doc) {
    console.log(`${doc.email} has been saved`)
})
module.exports = mongoose.model("Accounts", accountSchema)