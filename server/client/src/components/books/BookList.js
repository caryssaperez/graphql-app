import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../../queries';
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBook: null
    };
  }

  renderBooks() {
    let data = this.props.data;

    if (data.loading) {
      return <div>Loading books...</div>;
    }

    return data.books.map(book => {
      return (
        <li key={book.id} onClick={e => this.setState({ selected: book.id })}>
          {book.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul id="book-list">{this.renderBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
