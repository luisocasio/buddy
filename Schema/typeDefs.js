const { gql } = require('apollo-server');

const typeDefs = gql`
  type RegisterUsers {
    id: ID!
    email: String!
    first_name: String
    last_name: String
  }

  type Query {
    users: [RegisterUsers]
  }
`;

module.exports.typeDefs = typeDefs;
