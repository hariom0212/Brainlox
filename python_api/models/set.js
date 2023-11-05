const mongoose = require("mongoose");
const set = new mongoose.Schema({
    title: { type: String, required: true },
    type: {
        type: String,
        enum: ['problem', 'workshop'],
        required: true
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: true
    },
    imgLink: String,
    status: {
        type: String,
        enum: ["Unlocked", "Locked"],
        required: true
    },
    allQuestions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

module.exports = mongoose.model("Set", set);