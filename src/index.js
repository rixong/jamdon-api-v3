const express = require('express');
require('./db/mongoose')
const User = require('./models/User');
// const { db } = require('./models/User');
const userRouter = require('./routers/user')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(userRouter) // this came from the require above


app.listen(port, () => {
  console.log("My server is running on port" + port);
})


