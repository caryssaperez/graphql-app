const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();
app.use('/graphql', graphqlHTTP({ schema }));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
