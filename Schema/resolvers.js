const User = require('../models/User');

const resolvers = {
  Query: {
    getUserById: async (_, id) => {
      try {
        return await User.findById(id);
      } catch (err) {
        return console.log('error retrieving user.:', err);
      }
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      try {
        return await User.create(args);
      } catch (err) {
        return console.log('error creating user:', err);
      }
    },
  }
};

module.exports.resolvers = resolvers;
