export const schema = `#graphql

type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!

}

type Query {
   hello: String!
   getUserData:User!
}
`;
