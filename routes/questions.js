let express = require('express');
let router = express.Router();
let getQuestions  = require("../actions/getQuestionsAction")
let addQuestion = require("../actions/postQuestionAction") 
let addAnswer = require("../actions/postAnswer")

router.get('/', getQuestions );
router.post('/', addQuestion )
// router.post('/:id', addAnswer)

module.exports = router;
