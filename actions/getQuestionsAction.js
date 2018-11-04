const getQuestions = ( req, res ) => {
  try { 
    let questions = require("../database/questions.json")

    if (questions.length > 0) {
      res.json(questions)
      }
    else {
      res.status(404);
      res.json({
        "error": "Questions not found"
      });
    }
  } 
  catch (err) {
    res.status(500);
    res.json({
        "error": "Internal server error"
    });
  }
}

module.exports = getQuestions