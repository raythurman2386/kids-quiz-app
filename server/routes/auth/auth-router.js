const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const {
  validateRegister,
  validateLogin,
} = require('../../middleware/validateAuth');
const { User } = require('../../models');
const { generateToken } = require('../../utils');

authRouter
  .post('/register', validateRegister(), async (req, res, next) => {
    try {
      let user = req.body;
      const hashPw = await bcrypt.hash(user.password, 12);
      user.password = hashPw;

      await User.add(user);
      return res
        .status(201)
        .json({ message: 'You have been successfully registered.' });
    } catch (error) {
      next(error);
    }
  })

  .post('/login', validateLogin(), async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findBy({ username });
      const verifyPw = await bcrypt.compare(password, user.password);

      if (user && verifyPw) {
        const token = generateToken(user);
        const children = await User.findAll({
          parent_email: user.email,
        });
        return res.status(200).json({
          message: `Welcome ${user.username}`,
          jwt: token,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            children: children ? children : [],
          },
        });
      } else {
        return res.status(401).json({
          message: 'Invalid Credentials',
        });
      }
    } catch (error) {
      next(error);
    }
  });

// .post('/initiate-reset', accountLimiter, sendgrid(), (req, res, next) => {
//   try {
//     return res.status(200).json({ message: 'Please check your email' });
//   } catch (error) {
//     next(error);
//   }
// })

// .post('/reset-password', resetLimiter, async (req, res, next) => {
//   try {
//     const { email, new_password } = req.body;
//     let user = await User.findBy({ email: email });
//     const hashPw = await bcrypt.hash(new_password, 12);
//     let updatedUser = {
//       ...user,
//       password: hashPw,
//     };
//     await User.update(user.id, updatedUser);
//     return res.status(200).json({ message: 'Password successfully updated' });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = authRouter;
