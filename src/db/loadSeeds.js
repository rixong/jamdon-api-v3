const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'jamdom-v3';
const bcrypt = require('bcryptjs');
const seeds = require('./seeds');

MongoClient.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to my Jamdom DB');
  }

  const db = client.db(databaseName)

  const seedUsers = () => {
    seeds.users.forEach(async (user) => {
      user.password = await bcrypt.hash(user.password, 8);
      db.collection('users').insertOne(user, (error, result) => {
        // console.log(result)
      })
    })
  }

  const seedJams = () => {
      db.collection('jams').insertMany(seeds.jams);
  }

  seedUsers();
  // seedJams();

})