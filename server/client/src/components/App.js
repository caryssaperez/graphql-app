import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './books/BookList';
import BookNew from './books/BookNew';

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <BookList />
          <BookNew />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
