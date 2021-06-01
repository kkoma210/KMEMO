const DiaryModel = require('./models/diary');

function createDiary(contents, callback){
    const newDiary = new DiaryModel(contents);
    newDiary.save((error, result) => {
        callback(result);
    });
}

function findDiary(title, callback){
    DiaryModel.findOne({Title: title}).exex((error, result) => {
        callback(result);
    });
}

function readAllDiary(callback){
    DiaryModel.find({}, (err, result) => {
        callback(result);
    });
}

module.exports = {
    createDiary,
    findDiary,
    readAllDiary
};