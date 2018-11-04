let fs = require("fs")
let questions = require("../database/questions.json")

const addQuestion = ( req, res ) => {
  try {
    let newQuestion = req.body
    saveQuestionToDB(newQuestion, questions)
    res.status(200).redirect("/")
  }
  catch (err){
    res.status(500);
    res.json({
        "error": "Internal server error"
    });
  }
}

const saveQuestionToDB = (newQuestion, questions) => {
    newQuestion.id = questions.length
    newQuestion.answers = []
    questions.push(newQuestion)
    fs.writeFile("database/questions.json", JSON.stringify(questions), err => {
      if(err) throw new Error ("Nu s-a actualizat baza de date")
    })   
  }

module.exports = addQuestion
