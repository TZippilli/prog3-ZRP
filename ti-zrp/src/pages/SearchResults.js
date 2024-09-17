import React, { Component } from 'react';
import Movie from '../Components/Movie/Movie';



export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: null
    };
  }

  componentDidMount() {
    const query = this.props.location.state?.query || '';

    if (query) {
      const apiKey = 'e6a0d8ba2d9778d0953077400f26f011';
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ movies: data.results });
        })
        .catch(error => {
          this.setState({ error: 'Error al obtener resultados' });
        });
    }
  }

  render() {
    const { movies, error } = this.state;

    return (
      <div className='popular-container'>
        <h2 className="search-title">Resultados de búsqueda para: {this.props.location.state?.query}</h2>
        {error && <p>{error}</p>}
        <div className='popular-card'>
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <Movie movie={movie} key={index} />
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      </div>

    );
  }
}

