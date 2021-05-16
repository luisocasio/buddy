import { gql } from '@apollo/client';

const mutations = gql`
  mutation RegisterUser(
    $id: Number!
    $email: String!
    $first_name: String
    $last_name: String
  ) {
    registerUser(
      id: $id
      email: $email
      first_name: $first_name
      last_name: $last_name
    ) {
      id
      email
      first_name
      last_name
    }
  }
`;

export default mutations;
