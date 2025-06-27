// 1. Importar os módulos necessários
const express = require('express'); // Importa o framework Express
const path = require('path');     // Importa o módulo 'path' do Node.js para trabalhar com caminhos de arquivos

// 2. Inicializar a aplicação Express
const app = express();
const port = 3000; // Define a porta em que o servidor irá rodar

// 3. Criar o endpoint principal
// Este endpoint responde a requisições GET na URL raiz ('/')
app.get('/', (req, res) => {
  // A lógica aqui é baseada no material de aula[cite: 240].
  // Usamos res.sendFile para enviar um arquivo como resposta.
  // path.join() cria um caminho seguro e compatível com todos os sistemas operacionais.
  // __dirname é uma variável global do Node.js que contém o caminho absoluto do diretório onde este arquivo (app.js) está.
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 4. Iniciar o servidor
// O método listen faz com que o servidor comece a "escutar" por requisições na porta que definimos.
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});