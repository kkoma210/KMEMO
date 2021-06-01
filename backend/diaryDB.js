const DiaryModel = require('./models/diary');

// function createDiary(title, body, author, callback){
//     const newDiary = new DiaryModel({
//         Title: title,
//         Author: author,
//         Body: body
//     });
//     newDiary.save((error, result) => {
//         callback(result);
//     });
// }

function createDiary(title, body, author, callback) {
    const newItem = new DiaryModel({
      Title: title,
      Author: author,
      Body: body
    });
    newItem.save((error, result) => {
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
        console.log(result);
        callback(result);
    });
}

module.exports = {
    createDiary,
    findDiary,
    readAllDiary
};