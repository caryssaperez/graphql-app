const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Sample data.
let books = [
  { name: 'Gone With the Wind', genre: 'Historical fiction', id: '1 ' },
  { name: 'Infinite Jest', genre: 'Hysterical realism', id: '2' },
  { name: 'I, Robot', genre: 'Science fiction', id: '3' }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        args.id;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
