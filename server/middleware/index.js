require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const corsObj = cors({
  origin: '*',
  methods: 'GET, PUT, POST, DELETE',
  preflightContinue: false,
});

module.exports = server => {
  server.use(helmet());
  server.use(morgan('short'));
  server.use(corsObj);
  server.use(express.json());
};
