const resolvers = {
  Query: {
    users: () => [RegisteredUsers],
  },
};

module.exports.resolvers = resolvers;
