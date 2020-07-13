
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
  firstname: {
    type: String,
    require: true,
    trim: true
  },
  lastname: {
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


module.exports = User