// tests/app.test.js

const request = require('supertest'); // Importa o supertest
const express = require('express');   // Importa o express para criar um app de teste
const path = require('path');         // Importa o path para resolver os caminhos

// Criamos uma instância do app SÓ PARA OS TESTES.
// Isso evita que o servidor real (de app.js) precise estar rodando.
const app = express();

// Replicamos a mesma rota da nossa aplicação principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/views/index.html'));
});


// Início dos testes
describe('Testes do Endpoint Principal (GET /)', () => {

  it('deve responder com o status 200 OK', async () => {
    // 'request(app)' inicia a requisição na nossa instância de teste
    const response = await request(app).get('/');
    // 'expect(response.statusCode).toBe(200)' verifica se o código de status da resposta é 200
    expect(response.statusCode).toBe(200);
  });

  it('deve retornar o conteúdo HTML correto', async () => {
    const response = await request(app).get('/');
    // 'expect(response.type).toBe('text/html')' verifica se o tipo de conteúdo é HTML
    expect(response.type).toBe('text/html');
    // 'expect(response.text).toContain(...)' verifica se o corpo da resposta contém um trecho específico do nosso HTML
    expect(response.text).toContain('<h1>Bem-vindo à nossa Aplicação!</h1>');
  });

});