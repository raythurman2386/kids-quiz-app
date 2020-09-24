const mathRouter = require('express').Router();
const { generateQuestions, shuffleArray } = require('../../utils');

mathRouter.get('/multiplication-tables', (req, res) => {
  let questions = generateQuestions(Math.floor(Math.random() * 15) + 1);
  const shuffledQuestions = shuffleArray(questions);
  res.json(shuffledQuestions);
});

module.exports = mathRouter;
