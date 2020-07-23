const express = require('express');
require('./db/mongoose')
// const User = require('./models/user');
const userRouter = require('./routers/user')

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(userRouter) // this comes from the require above


app.listen(port, () => {
  console.log("My server is running on port " + port);
})
