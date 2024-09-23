import React, { Component } from 'react'
import Movie from '../Components/Movie/Movie'
import "../Components/Movie/Movie.css"
 

class Favoritos extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    const storage = localStorage.getItem('favoritos')
    const parsedArray = JSON.parse(storage)
    Promise.all(
      parsedArray.map((id) => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e6a0d8ba2d9778d0953077400f26f011`)
        .then(response => response.json())
        .then(movie =>
          this.setState({
            movies: [...this.state.movies, movie]

          })
        )
    })
  )
    this.setState({
      isLoading: false
    })

  }
  render() {
    return (
      <article className='movie-card'>
      <div className="card-content">
        {!this.state.isLoading ? (
          this.state.movies.length > 0 ? (
            this.state.movies
            .filter(movie => movie.title && movie.poster_path) //algunos id ya no estaban disponibles entonces me aseguro que sean válidos para que no se rompa la pagina
            .map(movie => <Movie key={movie.id} movie={movie}/>) 
          ) : (
            <p>Aún no has guardado ninguna película en favoritos!</p>
          )
        ) : (
          <p>Loading ...</p>
        )}
      </div>
      </article>
    );
  }
}

export default Favoritos