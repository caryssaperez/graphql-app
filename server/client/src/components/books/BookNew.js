import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../../queries';

class BookNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      genre: '',
      authorId: ''
    };

    this.submitForm = this.submitForm.bind(this);
  }

  renderAuthorOptions() {
    let data = this.props.authors;

    if (data.loading) {
      return <option disabled>Loading...</option>;
    }

    return data.authors.map(author => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  }

  onInputChange(target) {
    this.setState({ [target.name]: target.value });
  }

  submitForm(event) {
    event.preventDefault();

    this.props.bookNew({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={event => this.onInputChange(event.target)}
          />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={this.state.genre}
            onChange={event => this.onInputChange(event.target)}
          />
        </div>

        <div className="field">
          <label>Author:</label>
          <select
            onChange={event => this.setState({ authorId: event.target.value })}
          >
            <option>Select author</option>
            {this.renderAuthorOptions()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: 'authors' }),
  graphql(addBookMutation, { name: 'bookNew' })
)(BookNew);
