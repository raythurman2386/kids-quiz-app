const authRouter = require('./auth/auth-router');
const mathRouter = require('./math');
const testRouter = require('./test-routes');
const userRouter = require('./user');

module.exports = server => {
  server.use('/api/auth', authRouter);
  server.use('/api/math', mathRouter);
  server.use('/api/user', userRouter);
  server.use('api/test', testRouter);
};
