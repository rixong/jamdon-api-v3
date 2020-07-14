
const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
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
    validate(value) {
      if (value.toLowerCase().includes('password')) {
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
});

userSchema.pre('save', async function () {
  const user = this; // So we can refer to user instead od this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
});

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Unable to log in')
  }
  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Unable to log in')
  }
  return user
}

const User = mongoose.model('User', userSchema)


module.exports = User