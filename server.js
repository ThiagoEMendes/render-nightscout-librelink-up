const http = require('http');
const { start } = require('./dist/index.js');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.end('Worker ativo');
}).listen(port, () => {
  console.log(`✅ Servidor escutando na porta ${port}`);
});

start().catch(err => {
  console.error('❌ Erro ao iniciar o worker:', err);
  process.exit(1);
});
