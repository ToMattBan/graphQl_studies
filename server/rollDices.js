import { buildSchema } from 'graphql';

var schema = buildSchema(`
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

var rootValue = {
  rollDice: ({ numDice, numSides }) => {
    numSides = numSides ?? 6;
    var output = [];

    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * numSides));
    }

    return output;
  },
};

export default {
  schema,
  rootValue
}