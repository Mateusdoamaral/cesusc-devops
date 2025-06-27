const request = require('supertest');
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/views/index.html'));
});

describe('Testes do Endpoint Principal (GET /)', () => {

  it('deve responder com o status 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('deve retornar o conteúdo HTML correto', async () => {
    const response = await request(app).get('/');
    expect(response.type).toBe('text/html');
    expect(response.text).toContain('<h1>Bem-vindo à nossa Aplicação!</h1>');
  });
});