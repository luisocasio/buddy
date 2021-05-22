const { gql } = require('apollo-server');
const User = require('../models/User');

const typeDefs = gql`
  type RegisteredUsers {
    id: ID!
    email: String!
    first_name: String!
    last_name: String!
    password: String!
  }

  type Query {
    users: [RegisteredUsers]
  }

  type Mutation {
    createUser(
      email: String!
      first_name: String!
      last_name: String!
      password: String!
    ): RegisteredUsers
  }
`;

module.exports.typeDefs = typeDefs;
