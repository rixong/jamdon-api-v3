const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {  //use env var so that dev and prod can have different urls
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})


// me.save()
//   .then(() => console.log(me))
//   .catch(err => console.log('Error!!!!!!!!', err))