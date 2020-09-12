const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
	res.status(422);
	res.json({ Error: msg });
	return;
};

let questions = [
	{
		question:
			'What breed of dog was Marley in the film &quot;Marley &amp; Me&quot; (2008)?',
		correct_answer: 'Labrador Retriever',
		incorrect_answers: ['Golden Retriever', 'Dalmatian', 'Shiba Inu'],
	},
	{
		question: 'In golf, what name is given to a hole score of two under par?',
		correct_answer: 'Eagle',
		incorrect_answers: ['Birdie', 'Bogey', 'Albatross'],
	},
	{
		question:
			'Who wrote the Sinead O`Connor hit &#039;Nothing Compares 2 U&#039;?',
		correct_answer: 'Prince',
		incorrect_answers: ['Michael Jackson', 'Cameo', 'Rick James'],
	},
	{
		question: 'HTML is what type of language?',
		correct_answer: 'Markup Language',
		incorrect_answers: [
			'Macro Language',
			'Programming Language',
			'Scripting Language',
		],
	},
	{
		question:
			'Which Elite Four member from the first generation of Pok&eacute;mon became the champion in the next generation?',
		correct_answer: 'Lance',
		incorrect_answers: ['Agatha', 'Bruno', 'Lorelei'],
	},
	{
		question: 'The LS2 engine is how many cubic inches?',
		correct_answer: '364',
		incorrect_answers: ['346', '376', '402'],
	},
	{
		question: 'The LS3 engine is how many cubic inches?',
		correct_answer: '376',
		incorrect_answers: ['346', '364', '427'],
	},
	{
		question: 'In &quot;To Love-Ru&quot;, Ren and Run are from what planet?',
		correct_answer: 'Memorze',
		incorrect_answers: ['Deviluke', 'Mistletoe', 'Okiwana'],
	},
	{
		question:
			'In the &quot;Hitman&quot; series, what is the name of the main character?',
		correct_answer: 'Agent 47',
		incorrect_answers: ['Agent 27', 'Agent Smith', 'Agent 67'],
	},
	{
		question:
			'Which Van Gogh painting depicts the view from his asylum in Saint-R&eacute;my-de-Provence in southern France?',
		correct_answer: 'The Starry Night',
		incorrect_answers: [
			'Wheatfields with Crows',
			'The Sower with Setting Sun',
			'The Church at Auvers',
		],
	},
];

server.get('/questions', (req, res) => {
	res.json(questions);
});

server.listen(port, (err) => {
	if (err) console.log(err);
	console.log(`server is listening on port ${port}`);
});
