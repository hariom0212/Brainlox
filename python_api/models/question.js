const mongoose = require("mongoose");
const question = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    input: String,
    output: String,
    sol: {type: String, required: true}
});

module.exports = mongoose.model("Question", question);