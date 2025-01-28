const request = require('supertest');
const app = require('../src/app');

describe('Score Calculator API', () => {
  describe('POST /api/calculate-score', () => {
    it('should calculate score correctly for valid input', async () => {
      const response = await request(app)
        .post('/api/calculate-score')
        .send({
          numbers: [1, 2, 3, 4, 5]
        });

      expect(response.status).toBe(200);
      expect(response.body.data.score).toBe(13);
    });

    it('should handle invalid input', async () => {
      const response = await request(app)
        .post('/api/calculate-score')
        .send({
          numbers: ['1', '2', '3']
        });

      expect(response.status).toBe(400);
    });
  });

  describe('GET /api/health', () => {
    it('should return OK status', async () => {
      const response = await request(app)
        .get('/api/health');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('OK');
    });
  });
});