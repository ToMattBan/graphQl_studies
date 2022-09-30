import express from 'express'
import { graphqlHTTP } from 'express-graphql';

import hello from "./hello.js";
import rollDices from "./rollDices.js"

var app = express();

app.use('/hello', graphqlHTTP({
  schema: hello.schema,
  rootValue: hello.rootValue,
  graphiql: true
}));

app.use('/rollDices', graphqlHTTP({
  schema: rollDices.schema,
  rootValue: rollDices.rootValue,
  graphiql: true
}));

app.listen(3000);