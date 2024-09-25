import React, { Component } from 'react';
import MovieGrid from "../Components/MovieGrid/MovieGrid";

class Favoritos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const storage = localStorage.getItem('favoritos');
    if (storage !== null) {
      const parsedStorage = JSON.parse(storage);

      Promise.all(
        parsedStorage.map((id) =>
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e6a0d8ba2d9778d0953077400f26f011`)
            .then((response) => response.json()))
      ).then((data) => {
        this.setState({
          movies: data,
        });
      });
    }
  }

  render() {
    const { movies } = this.state;
    
    return (
      <>
      <h3>Lista de Favoritos</h3>
      
        {movies.length > 0 ? (
          <MovieGrid pelis={movies} />
        ) : (
          <p className='textoGeneral'>No hay películas en favoritos.</p>
        )}
      </>
    );
  }
}

export default Favoritos;