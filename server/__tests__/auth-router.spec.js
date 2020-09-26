const supertest = require('supertest');
const server = require('../api/server');
const db = require('../data/db-config');

beforeAll(async done => {
  await db.seed.run();
  done();
});

describe('Tests for register route', () => {
  test('should Register new user', async () => {
    const user = {
      username: 'test',
      email: 'test@test.com',
      password: 'test',
      role: 'parent',
    };

    const res = await supertest(server).post('/api/auth/register').send(user);
    expect(res.status).toBe(201);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('successfully');
  });
  test('should fail Register due to username', async () => {
    const user = {
      email: 'test2@test.com',
      password: 'test',
      role: 'parent',
    };

    const res = await supertest(server).post('/api/auth/register').send(user);
    expect(res.status).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('Provide');
  });
  test('should fail Register due to password', async () => {
    const user = {
      username: 'test3',
      email: 'test3@test.com',
      role: 'parent',
    };

    const res = await supertest(server).post('/api/auth/register').send(user);
    expect(res.status).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('Provide');
  });
  test('should fail Register due to email', async () => {
    const user = {
      username: 'test4',
      password: 'test',
      role: 'parent',
    };

    const res = await supertest(server).post('/api/auth/register').send(user);
    expect(res.status).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('Provide');
  });
  test('should fail Register due to matching username', async () => {
    const user = {
      username: 'test',
      email: 'test@test.com',
      password: 'test',
      role: 'parent',
    };

    const res = await supertest(server).post('/api/auth/register').send(user);
    expect(res.status).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('exists');
  });
  test('should fail Register due to matching email', async () => {
    const user = {
      username: 'testmatch',
      email: 'test@test.com',
      password: 'test',
      role: 'parent',
    };

    const res = await supertest(server).post('/api/auth/register').send(user);
    expect(res.status).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('exists');
  });
});

describe('Tests for login route', () => {
  test('should login a user', async () => {
    const user = {
      username: 'test',
      password: 'test',
    };

    const res = await supertest(server).post('/api/auth/login').send(user);
    expect(res.status).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('Welcome');
  });
  test('should fail login due to no username', async () => {
    const user = {
      password: 'test',
    };

    const res = await supertest(server).post('/api/auth/login').send(user);
    expect(res.status).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('supply');
  });
  test('should fail login due to no password', async () => {
    const user = {
      username: 'test',
    };

    const res = await supertest(server).post('/api/auth/login').send(user);
    expect(res.status).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('supply');
  });
  test('should fail login due to no incorrect username', async () => {
    const user = {
      username: 'test53452',
      password: 'test',
    };

    const res = await supertest(server).post('/api/auth/login').send(user);
    expect(res.status).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('Incorrect');
  });
  test('should fail login due to no incorrect password', async () => {
    const user = {
      username: 'test',
      password: 'testing',
    };

    const res = await supertest(server).post('/api/auth/login').send(user);
    expect(res.status).toBe(401);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toContain('Invalid');
  });
});
