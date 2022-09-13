const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello, Xuxinha')
})

app.listen(PORT, () => {
    console.log(`🚀 Serviço executando em: http://localhost:${PORT}`);
})

