const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.send('Gateway is healthy');
});

// Este gateway depende totalmente dos contratos e disponibilidade dos outros dois serviços
app.listen(3000, () => console.log('API Gateway rodando na 3000'));
