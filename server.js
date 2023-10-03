const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const data = require('./mock');

const app = express();
const port = 4000;

// Schema
const typeDefs = `
type MenuItem {
  id: ID
  name: String!
  price: Float
}

type MenuType {
  id: ID
  name: String!
  menus: [MenuItem]
}

type Query {
  types: [MenuType]
}
`;

const resolvers = {
  Query: {
    types: (obj, args, context) => context.types,
  },
};

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Entrypoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`)
});