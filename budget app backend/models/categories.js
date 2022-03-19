const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.ObjectId
    },
    title: {
        type: String
    },
    type: {
        type: String
    }
}, {
    timestamps: true
});

categorySchema.index({ user_id: 1, title: 1}, { unique: true });

categorySchema.post("save", function (doc) {
    console.log(`${doc.email} has been saved`)
})

module.exports = mongoose.model("Categories", categorySchema)