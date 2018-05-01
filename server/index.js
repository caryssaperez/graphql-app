if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
