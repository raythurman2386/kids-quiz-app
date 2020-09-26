require('dotenv').config();
const jwt = require('jsonwebtoken');

function Question(number, multiplicative) {
  this.question = `What is ${number} x ${multiplicative}`;
  this.correct_answer = `${number * multiplicative}`;
  this.incorrect_answers = [
    `${number * (multiplicative + 1)}`,
    `${number * (multiplicative + 3)}`,
    `${number * (multiplicative - 1)}`,
  ];
}

function generateQuestions(num) {
  const questions = [];
  for (let i = 1; i < 11; ++i) {
    let question = new Question(num, i);
    questions.push(question);
  }
  return questions;
}

const shuffleArray = arr => [...arr].sort(() => Math.random() - 0.5);

// Generate JWT
const generateToken = user => {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: '1d',
  };

  const secret = process.env.JWT_SECRET;

  return jwt.sign(payload, secret, options);
};

module.exports = { generateQuestions, shuffleArray, generateToken };
