const express = require('express');
require('./db/mongoose')
const User = require('./models/User');
const { db } = require('./models/User');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

app.post('/users', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  }
  catch (e) {
    res.status(400).send(e)
  }
})

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.send(users)
  }
  catch (e) {
    res.status(500).send()
  }
});

app.listen(port, () => {
  console.log("My server is running on port" + port);
})


