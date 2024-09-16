import React, { Component } from 'react'

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
      fetch('Url de la movie')
        .then(response => response.JSON())
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
        (!this.state.isLoading ? <p>Grilla</p> : <p> Loading ...</p>)

      </div>
    )
  }
}

export default Favoritos
