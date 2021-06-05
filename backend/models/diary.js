const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    Title: {
        type: String,
    },
    Author: {
        type: String
    },
    Body: {
        type: String,
    },
    Good: {
        type: Number,
        default: 0
    },  
    Bad: {
        type: Number,
        default: 0
    },
    Star: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const DiaryModel = mongoose.model("myDiary", schema);
module.exports = DiaryModel;