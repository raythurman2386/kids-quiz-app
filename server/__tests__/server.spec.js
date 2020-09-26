const supertest = require('supertest');
const server = require('../api/server');

describe('test routes', () => {
  test('Welcome Route', async () => {
    const res = await supertest(server).get('/');

    expect(res.status).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toMatch(/Welcome to Kidspace!/i);
  });
});
