const express = require('express');
require('./db/mongoose')

const userRouter = require('./routers/user')
const jamRouter = require('./routers/jam')

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(userRouter); // this comes from the require above
app.use(jamRouter);

app.listen(port, () => {
  console.log("My server is running on port " + port);
})
