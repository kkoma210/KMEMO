const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Author: {
        type: String
    },
    body: {
        type: String,
        required: true
    }  
},
{
    collection: 'diary'
});

const DiaryModel = mongoose.model("diary", schema);
module.exports = DiaryModel;