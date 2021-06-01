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
    }  
}, {timestamps: true})

const DiaryModel = mongoose.model("myDiary", schema);
module.exports = DiaryModel;