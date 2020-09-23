const authRouter = require('./auth/auth-router');
const mathRouter = require('./math');

module.exports = server => {
  server.use('/api/auth', authRouter);
  server.use('/api/math', mathRouter);
};
