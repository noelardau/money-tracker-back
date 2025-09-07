// tests/integration/app.integration.test.js
// Test d'intégration pour les routes principales du backend

const request = require('supertest');
const app = require('../app');

describe('Integration: API routes', () => {
  describe('GET /api.wallets/', () => {
    it('should return 200 and an array (wallets)', async () => {
      const res = await request(app).get('/api.wallets/');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('GET /api.expenses/', () => {
    it('should return 200 and an array (expenses)', async () => {
      const res = await request(app).get('/api.expenses/');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('GET /api.incomes/', () => {
    it('should return 200 and an array (incomes)', async () => {
      const res = await request(app).get('/api.incomes/');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});
