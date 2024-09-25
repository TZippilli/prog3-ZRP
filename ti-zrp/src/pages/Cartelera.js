import React, { Component } from 'react';
import MovieGrid from "../Components/MovieGrid/MovieGrid";

class PaginaCarteleras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filteredMovies: [],
      filterValue: "",
      actualPage: 1
    };
  }

  handleFilterChange(e) {
    const userValue = e.target.value

    this.setState({
      filterValue: userValue,
      filteredMovies: this.state.movies.filter(movie => movie.title.toLowerCase().includes(userValue.toLowerCase()))
    })
  }  

  componentDidMount() {
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=${this.state.actualPage}`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          this.setState({ movies: data.results,
          filteredMovies: data.results,
          actualPage: this.state.actualPage + 1 });
        } else {
          console.error("No se encuentran películas");
        }
      })
      .catch(error => console.log(error));
  }

  handleLoadMore(){
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=${this.state.actualPage}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          this.setState({ movies: this.state.movies.concat(data.results),
          filteredMovies: this.state.movies.concat(data.results),
          actualPage: this.state.actualPage + 1  });
        } else {
          console.error("No se encuentran películas");
        }
      })
      .catch(error => console.log(error));
  }

  handleResetFilter(){
    this.setState({
      filterValue: "",
      filteredMovies: this.state.movies 
    })
  }

  render() {
    return (
      <>
        <main>
          <h3>Películas en Cartelera</h3>
          <div className='botonesGeneral'>
          <input type="text" onChange={(e)=> this.handleFilterChange(e)} value={this.state.filterValue} />
          <button onClick={()=>this.handleResetFilter()}>Reset Filter</button>
          {this.state.movies.length === 0 ? <img src="./gifLoader.gif" alt="loader" ></img>  : <MovieGrid pelis={this.state.filteredMovies}  /> }
          {<button onClick={()=>this.handleLoadMore()}>Cargar más</button>}
          </div>
        </main>
      </>
    );
  }

}

export default PaginaCarteleras;
