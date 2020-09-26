const { User } = require('../models');
/* check for all credentials for register
 * username
 * password
 * email
 *
 * Check to see if email is used
 *
 * Check to see if username is used
 */
function validateRegister() {
  return async (req, res, next) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
      return res.status(400).json({ message: 'Please Provide All Fields' });
    }

    const username = await User.findBy({ username: req.body.username });
    if (username) {
      return res
        .status(400)
        .json({ message: 'A user with that username exists' });
    }

    const email = await User.findBy({ email: req.body.email });
    if (email) {
      return res.status(400).json({ message: 'A user with that email exists' });
    }

    next();
  };
}

/* check for credentials on login
 * username
 * password
 */
function validateLogin() {
  return async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      return res
        .status(400)
        .json({ message: 'Please supply a username and a password' });
    }

    const username = await User.findBy({ username: req.body.username });
    if (!username) {
      return res.status(400).json({ message: 'Incorrect Username' });
    }

    const { password, ...rest } = username;
    req.user = { ...rest };
    next();
  };
}

module.exports = {
  validateRegister,
  validateLogin,
};
