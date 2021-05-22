// Defining how our data will be stored in our database.
const mongoose = require('mongoose');
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

// This is the compiling of the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
