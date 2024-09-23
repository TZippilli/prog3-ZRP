import React, { Component } from 'react';
import MovieGrid from "../Components/MovieGrid/MovieGrid";

class PaginaPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          this.setState({ movies: data.results });
        } else {
          console.error("No se encuentran películas");
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <main>
          <h2>Películas Populares</h2>
          {this.state.movies.length === 0 ? <p>Cargando</p>  : <MovieGrid pelis={this.state.movies}  /> }
          
        </main>
      </>
    );
  }
}

export default PaginaPopulares;
