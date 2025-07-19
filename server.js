const http = require('http');
const app = require('./dist/index.js'); // Importa o worker real (já compilado em dist)

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end('Worker ativo');
}).listen(port, () => {
  console.log(`Servidor HTTP escutando na porta ${port}`);
});

// Inicia o worker real
app.start();
