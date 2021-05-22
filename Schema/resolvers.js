const User = require('../models/User');

const resolvers = {
  Query: {
    users: () => [RegisteredUsers],
  },
  Mutation: {
    createUser: async (_, args) => {
      try {
        let res = await User.create(args);
        console.log(res);
        return res;
      } catch (err) {
        return console.log('resolver error:', err);
      }
    },
  },
};

module.exports.resolvers = resolvers;
