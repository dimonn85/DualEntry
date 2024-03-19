const { readFileSync } = require('fs');
const { ApolloServer, gql } = require('apollo-server');
const mocks = require('./mocks');

const schemaFile = readFileSync('src/schema.graphql').toString('utf-8');
const typeDefs = gql`
  ${schemaFile}
`;

const resolvers = {
  Query: mocks(),
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({
    port: 4001,
  })
  .then(({ url }) => {
    console.log(`🚀  Mocks server ready at ${url}`);
  });
