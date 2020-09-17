import { Question as QTypes } from '../types';

export const shuffleArray = (arr: any[]) =>
  [...arr].sort(() => Math.random() - 0.5);

function Question(this: QTypes, number: number, multiplicative: number) {
  this.question = `What is ${number} x ${multiplicative}`;
  this.correct_answer = `${number * multiplicative}`;
  this.incorrect_answers = [
    `${number * (multiplicative + 1)}`,
    `${number * (multiplicative + 3)}`,
    `${number * (multiplicative - 1)}`,
  ];
}

export function generateQuestions(num: number) {
  let prevNumbers: number[] = [];
  const questions = [];
  if (prevNumbers.includes(num)) {
    num = Math.floor(Math.random() * 10) + 1;
  } else if (prevNumbers.length === 10) {
    prevNumbers = [];
  }
  for (let i = 1; i < 11; ++i) {
    let question: QTypes = new (Question as any)(num, i);
    questions.push(question);
    prevNumbers.push(num);
  }
  return questions;
}
