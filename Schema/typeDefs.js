const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    first_name: String!
    last_name: String!
    password: String!
  }

  type Query {
    getUserById(
      _id:ID
    ): User
  }

  type Mutation {
    createUser(
      email: String!
      first_name: String!
      last_name: String!
      password: String!
    ): User
  }
`;

module.exports.typeDefs = typeDefs;
