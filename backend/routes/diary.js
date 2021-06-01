var express = require('express');
var router = express.Router();
const db = require('../diaryDB');

router.get('/', (req, res) => {
    db.readAllDiary((diary) => {
        res.json(diary);
    }); 
});

router.post('/write', (req, res) => {
    db.createDiary(req.body, (diary) => {
        res.json(diary);
    });
})

module.exports = router;