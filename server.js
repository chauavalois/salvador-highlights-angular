const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

server.use(middlewares);
server.use(bodyParser.json());

// Rota para registro de usuário
server.post('/register', (req, res) => {
  const { username, password } = req.body;
  const users = router.db.get('users');
  const existingUser = users.find({ username }).value();

  if (existingUser) {
    res.status(400).json({ success: false, message: 'Usuário já existe' });
  } else {
    const id = users.value().length + 1;
    const newUser = { id, username, password, token: `token${id}` };
    users.push(newUser).write();
    res.json({ success: true });
  }
});

// Rota para login de usuário
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = router.db.get('users').find({ username, password }).value();

  if (user) {
    res.json({ token: user.token });
  } else {
    res.status(400).json({ message: 'Credenciais inválidas' });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
