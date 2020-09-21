const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');

authRouter
  .post('/register', async (req, res, next) => {
    try {
      console.log(req.body);
    } catch (error) {
      next(error);
    }
  })

  .post('/login', async (req, res, next) => {
    try {
      console.log(req.body);
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
//     let user = await Parent.findBy({ email: email });
//     const hashPw = await bcrypt.hash(new_password, 12);
//     let updatedParent = {
//       ...user,
//       password: hashPw,
//     };
//     await Parent.update(user.id, updatedParent);
//     return res.status(200).json({ message: 'Password successfully updated' });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = authRouter;
