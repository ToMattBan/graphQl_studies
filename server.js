var app = require('express')();
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

var rootValue = {
  rollDice: ({numDice, numSides}) => {
    numSides = numSides ?? 6;
    var output = [];

    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * numSides));
    }

    return output;
  },
};

app.use('/rollDices', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(3000);