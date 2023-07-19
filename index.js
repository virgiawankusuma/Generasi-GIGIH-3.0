const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!').status(200);
})

app.post('/users', (req, res) => {
  res.send('User created successfully').status(201);
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID ${userId} updated successfully`).status(200);
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID ${userId} deleted successfully`).status(200);
});

app.patch('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID ${userId} partially updated successfully`).status(200);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})