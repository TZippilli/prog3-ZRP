import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
  }

  handleInputSubmit = () => {
    const { query } = this.state;
    this.props.history.push('/search', { query });
  }

  render() {
    return (
      <div className="search-form">
        <input
          onChange={this.handleInputChange}
          type="text"
          name="query"
          value={this.state.query}
          placeholder="Search Movie"
        />
        <button onClick={this.handleInputSubmit}>Search Movie</button>
      </div>
    );
  }
}

export default SearchForm;