const testRouter = require('express').Router();
const { Test } = require('../../models');

testRouter
  .post('/test', async (req, res, next) => {
    try {
      // Save a test to the tests table
    } catch (err) {
      next(error);
    }
  })
  // Temp route to keep track of my users tests for setting everything up
  .get('/tests', async (req, res, next) => {
    try {
      const tests = await Test.find();
      return res.status(200).json(tests);
    } catch (err) {
      next(err);
    }
  })
  .get('/tests/:id', async (req, res, next) => {
    try {
      // Check tests table for all tests with the
      // user id that matches the params user id passed through
      const tests = await Test.findAll({ user_id: req.params.id });
      return res.status(200).json(tests);
    } catch (err) {
      next(err);
    }
  });

module.exports = testRouter;
