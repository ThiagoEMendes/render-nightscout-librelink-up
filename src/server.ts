import express from 'express';
import { start } from './index';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Nightscout LibreLink Up Worker está rodando!');
});

app.listen(PORT, async () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
  await start();
});
