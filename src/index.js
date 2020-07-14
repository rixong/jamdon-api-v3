const express = require('express');
require('./db/mongoose')
const User = require('./models/user');
// const { db } = require('./models/User');
const userRouter = require('./routers/user')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(userRouter) // this came from the require above


app.listen(port, () => {
  console.log("My server is running on port" + port);
})

const bcrypt = require('bcryptjs')
const myFunction = async () => {
  const password = 'password';
  const hashedPassword = await bcrypt.hash(password, 8)
console.log('hashed - ',hashedPassword)
const isValid = await bcrypt.compare('passWord', hashedPassword);
console.log(valid)

} 
myFunction();