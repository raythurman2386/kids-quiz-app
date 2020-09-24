const userRouter = require('express').Router();
const { User } = require('../../models');

userRouter
  .post('/child', async (req, res) => {
    // return the children that belong to that parent
    // find users whose role is child
    // and also who's parent_email, matches
    // logged in users email
    try {
      const children = await User.findAll({
        parent_email: req.body.email,
      });
      return res.status(200).json({ children });
    } catch (err) {
      next(error);
    }
  })
  .get('/users', async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  });

module.exports = userRouter;
