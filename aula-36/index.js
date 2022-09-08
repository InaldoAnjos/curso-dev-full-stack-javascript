const express = require('express')
const app = express()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const PORT = 3001

app.get('/usuarios', async (req, res) => {
    let usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)
})

app.listen(PORT, () => {
    console.log(`🚀 Serviço executando em: http://localhost:${PORT}`);
})