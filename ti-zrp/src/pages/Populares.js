import React, { Component } from 'react';
import MovieGrid from "../Components/MovieGrid/MovieGrid";

class PaginaPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page : 1
    };
  }

  componentDidMount() {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=${this.state.page}`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          this.setState({ movies: data.results, page: this.state.page + 1 });
        } else {
          console.error("No se encuentran películas");
        }
      })
      .catch(error => console.log(error));
  }

  loadMoreMovies () {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=${this.state.page}`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          this.setState({ movies: [...this.state.movies, data.results], page: this.state.page + 1 });
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
          <button onClick={() => this.loadMoreMovies()} >Cargar más pelis</button>
        </main>
      </>
    );
  }
}

export default PaginaPopulares;
