const User = require('../models/User');

const resolvers = {
  Query: {
    getUserById: async (_, id) => {
      try {
        let user = await User.findById(id);
        console.log(user)
        return user;
      } catch (err) {
        return console.log('error retrieving user.:', err);
      }
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      try {
        let res = await User.create(args);
        console.log(res);
        return res;
      } catch (err) {
        return console.log('error creating user:', err);
      }
    },
  }
};

module.exports.resolvers = resolvers;
