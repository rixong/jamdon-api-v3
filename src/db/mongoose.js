const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jamdom-v3', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})


// me.save()
//   .then(() => console.log(me))
//   .catch(err => console.log('Error!!!!!!!!', err))