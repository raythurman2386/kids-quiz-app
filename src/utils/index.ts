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
  const questions = [];
  for (let i = 1; i < 11; ++i) {
    // @ts-ignore
    let question = new Question(num, i);
    questions.push(question);
  }
  return questions;
}
