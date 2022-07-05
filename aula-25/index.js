const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/sobre', (req, res) => {
  res.render('sobre');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const body = req.body;

  res.render('saudacao', { nome: body.nome });
});

app.listen(PORT, () => console.info(`Server running on port ${PORT}`));
