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
	for (let i = 0; i < 10; ++i) {
		let question = new Question(num, i);
		questions.push(question);
	}
	return questions;
}

module.exports = { generateQuestions };
