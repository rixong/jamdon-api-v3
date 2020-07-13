
const mongoose = require('mongoose')
const validator = require('validator');

const User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not a valid email address")
      }
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 4,
    trim: true,
    validate(value){
      if(value.toLowerCase().includes('password')) {
        throw new Error("Password cannot contain the word 'password'")
      }
    }
  },
  firstName: {
    type: String,
    require: true,
    trim: true
  },
  lastName: {
    type: String,
    require: true,
    trim: true
  },
  instruments: {
    type: Array,
  },
  genres: {
    type: Array,
  },
  youtubeLink: {
    type: String,
    trim: true
  }
})

const me = new User(
  {
    firstName: 234,
    lastName: 'Tatum',
    password: 'word',
    email: 'efrDasdfSF@gmail.com',
    instruments: ['drums', 'piano', 'vibes'],
    genres: ['rock', 'jazz']
  }
)

module.exports = User