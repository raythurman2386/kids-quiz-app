const express = require('express');
const middleware = require('../middleware');
const routes = require('../routes/index.routes');

const server = express();

middleware(server);
routes(server);

server.use('/', (req, res, next) => {
  res.status(200).json({ message: 'Welcome to Kidspace!' });
});

server.use((err, _req, res, _next) => {
  res.status(500).json({ message: 'Something has went terribly wrong' });
});

module.exports = server;
