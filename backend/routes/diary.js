var express = require('express');
var router = express.Router();
const db = require('../diaryDB');

router.get('/', (req, res) => {
    console.log('router get');
    db.readAllDiary((diary) => {
        res.send(diary);
    }); 
});

router.post('/write', (req, res) => {
    const title = req.body.Title;
    const body = req.body.Body;
    const author = req.body.Author;
    console.log(title, body, author);
    db.createDiary(title, body, author, (newItem) => {
        console.log(newItem);
        res.status(200).send(newItem);
    });
})

module.exports = router;