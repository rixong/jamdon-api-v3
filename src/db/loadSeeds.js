const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'jamdom-v3';
const { users } = require('./seeds');

MongoClient.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to my Jamdom DB');
  }

  const db = client.db(databaseName)

  db.collection('users').insertMany(users, (error, result) => {
    console.log(result)
  })

})