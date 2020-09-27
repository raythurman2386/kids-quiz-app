const userRouter = require('express').Router();
const { User } = require('../../models');

userRouter
  .post('/child', async (req, res) => {
    try {
      const children = await User.findAll({
        parent_email: req.body.email,
      });
      return res.status(200).json({ children });
    } catch (err) {
      next(error);
    }
  })
  // Temp route to keep track of my users for setting everything up
  .get('/users', async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  });

module.exports = userRouter;
