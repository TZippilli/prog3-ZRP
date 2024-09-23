import React, { Component } from 'react'
import MovieGrid from '../MovieGrid/MovieGrid'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export class HomeMovies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieList: []
        }
    }


    componentDidMount() {
        fetch(this.props.url).
        then((response) => response.json()).
        then((movies) => this.setState({ movieList: movies.results.slice(0, 5) })).
        catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
            {this.state.movieList.length === 0 ? <p>Cargando...</p> : <MovieGrid pelis={this.state.movieList} /> }
            </div>
        )
    }
}

export default HomeMovies