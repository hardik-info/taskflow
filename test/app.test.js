const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return welcome message', async () => {
    const response = await request(app).get('/');
    console.log(response.text);  // Debugging: Logs without assertion
    // Missing assertion
  });

  it('should handle errors properly', async () => {
    const response = await request(app).get('/undefined-route');
    console.log(response.status);  // Debugging: Logs without assertion
    // Missing assertion for error status
  });
});
