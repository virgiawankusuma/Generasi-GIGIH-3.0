const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;

// data
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@gmail.com'
  },
  {
    id: 2,
    name: 'Sara Smith',
    email: 'sarasmuth@gmail.com'
  },
  {
    id: 3,
    name: 'Bob Williams',
    email: 'bob@gmail.com'
  }
];

// GET /users
app.get('/users', (req, res) => {
  res.send({
    message: 'Users retrieved successfully',
    data: users
  }).status(200);
});

// POST /users
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required fields.' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.send({
    message: 'User created successfully',
    data: newUser
  }).status(201);
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id === Number(userId));

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  res.send({
    message: `User with ID ${userId} retrieved successfully`,
    data: user
  }).status(200);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required fields.' });
  }

  const user = users.find(user => user.id === Number(userId));
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  user.name = name;
  user.email = email;

  res.send({
    message: `User with ID ${userId} updated successfully`,
    data: user
  }).status(200);
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  const userIndex = users.findIndex(user => user.id === Number(userId));

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found.' });
  }

  users.splice(userIndex, 1);

  res.send({
    message: `User with ID ${userId} deleted successfully`,
    data: users
  }).status(200);
});

app.listen(port, () => {
  console.log('Server is running on port 3000');
});