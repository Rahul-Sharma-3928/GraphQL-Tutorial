import { gql } from "@apollo/client";

export const helloQuery = gql(`
query Query {
  hello
}`);

// export const createUser = gql(`
// query Query {
//   createUser {
//     id
//     name
//     email
//     password
//     createdAt
//   }
// }`);

// export const getUserData = gql(`
// query Query {
//   getUserData {
//     id
//     name
//     email
//     password
//     createdAt
//     updatedAt
//   }
// }`);
