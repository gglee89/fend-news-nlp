const request = require('supertest');
const app = require('../src/server/app');

describe('Test the /test path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/test')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
