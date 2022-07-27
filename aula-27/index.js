const express = require('express');
const app = express();
const PORT = 3001;

const verificaAdmin = require('./middleware');

const users = require('./users');

app.use(express.json()); //Postman
app.use(express.urlencoded({ extended: false })); //Chrome

app.get('/', (req, res) => {
  return res.send({ test: 'ok' });
});

app.get('/obrigatorio/:id/name/:name', (req, res) => {
  const id = req.params.id;
  const name = req.params.name;

  return res.send(`Você mandou o id: ${id} e nome ${name}`);
});

app.get('/opcional', (req, res) => {
  const name = req.query.name;

  return res.send(`Você informou o nome: ${name}`);
});

app.post('/login', (req, res) => {
  const body = req.body;

  return res.send(body);
});

app.get('/users', (req, res) => {
  return res.send(users);
});

app.use((req, res, next) => {
  const authorization = req.headers.authorization;

  if (authorization) {
    return next();
  }

  return res.status(401).json({ status: 401, errorMessage: 'Não autorização' });
});

app.post('/users', verificaAdmin, (req, res) => {
  const body = req.body;

  if (body) {
    users.push(body);
  }

  return res.send(users);
});

app.put('/users/:id', verificaAdmin, (req, res) => {
  const id = parseInt(req.params.id);
  const body = req.body;

  const usersId = users.map((user) => user.id);
  const index = usersId.indexOf(id);

  if (index != -1) {
    users[index] = {
      ...users[index],
      ...body,
    };

    return res.status(200).json(users);
  }

  return res
    .status(404)
    .json({ status: 404, errorMessage: 'Usuário não encontrado!' });
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const usersId = users.map((user) => user.id);
  const index = usersId.indexOf(id);

  if (index != -1) {
    const resultado = users.filter((user) => user.id != id);

    return res.send(resultado);
  }

  return res
    .status(404)
    .json({ status: 404, errorMessage: 'Usuário não encontrado!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
