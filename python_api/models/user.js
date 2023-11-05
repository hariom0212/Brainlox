const mongoose = require("mongoose");
const user = new mongoose.Schema({

    user_email: {
        type: String,
        required: true
    },

    unlocked_sets:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Set'
    },

    unlock_all:{
        type: String,
        enum: ["True", "False"],
        required: true

    },

    unlock_all_validity:{
       type: String,
       required: true
    }
})
module.exports = mongoose.model("User", user);