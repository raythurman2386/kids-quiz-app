const express = require('express');
const middleware = require('./middleware');
const routes = require('./routes/index.routes');
const { generateQuestions, shuffleArray } = require('./utils');

const port = process.env.PORT || 3333;
const server = express();

middleware(server);
routes(server);

server.get('/multiplication-tables', (req, res) => {
  let questions = generateQuestions(Math.floor(Math.random() * 10) + 1);
  const shuffledQuestions = shuffleArray(questions);
  res.json(shuffledQuestions);
});

server.use((_req, res, _next) => {
  res.status(404).json({ message: 'Route not found' });
});

server.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Something has went terribly wrong' });
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
