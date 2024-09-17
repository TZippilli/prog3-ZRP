import React, { Component } from 'react'
import MovieGrid from '../Components/MovieGrid/MovieGrid'

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
      parsedArray.map(id => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e6a0d8ba2d9778d0953077400f26f011`)
        .then(response => response.json())
        .then(movie =>
          this.setState({
            movies: [...this.state.movies, movie]

          })
        )
    }))
    this.setState({
      isLoading: false
    })

  }
  render() {
    return (
      <div>
        {!this.state.isLoading ? <MovieGrid/> : <p>Loading ...</p>}
      </div>
    );
  }}

export default Favoritos
