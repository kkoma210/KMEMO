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

function updateGood({id, delta}, callback){
    DiaryModel.findById(id, function(err, diary){
        diary.Good += delta;
        diary.save((err) => {
            callback();
        });
    }); 
}

function updateBad({id, delta}, callback){
    DiaryModel.findById(id, function(err, diary){
        diary.Bad += delta;
        diary.save((err) => {
            callback();
        });
    }); 
}

function changeStar({id}, callback){
    DiaryModel.findById(id, (err, diary) => {
        diary.Star = !diary.Star;
        diary.save((err) => {
            callback();
        })
    })
}

module.exports = {
    createDiary,
    findDiary,
    readAllDiary,
    updateGood,
    updateBad,
    changeStar
};