const { generateQuestions, shuffleArray, generateToken } = require('../utils');

describe('Testing Utils Functions', () => {
  test('should generate 10 questions', async () => {
    const res = await generateQuestions(1);
    expect(res.length).toBe(10);
  });
  test('should test shuffle array', () => {
    const arr = [1, 2, 3, 4];
    const res = shuffleArray(arr);
    expect(res).not.toBe(arr);
  });
  test('should test jwt token generation', () => {
    const user = {
      id: 1,
      username: 'test',
    };
    const res = generateToken(user);
    expect(res).toBeDefined();
  });
});
