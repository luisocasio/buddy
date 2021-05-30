// Defining how our data will be stored in our database.
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

// ID's generate automatically in mongoDB
// Email is using validator to validate email
// https://www.npmjs.com/package/validator

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: 'Invalid Email address' });
      }
    },
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
  },
});

userSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }
  next()
})

// This is the compiling of the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
