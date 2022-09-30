import { buildSchema } from 'graphql';

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

var rootValue = {
  hello: () => {
    return "Hello World"
  }
}

export default {
  schema,
  rootValue
}