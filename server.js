const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./Schema/typeDefs');
const { resolvers } = require('./Schema/resolvers');
require('dotenv').config();
require('./utils/mongooseConnect');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': 'dark',
    },
  },
});

server.listen(process.env.PORT, () => console.log('Server is running!'));
