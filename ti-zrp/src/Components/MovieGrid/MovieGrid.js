import "./MovieGrid.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import Movie from "../Movie/Movie";

class MovieGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const { cualMostrar } = this.props; // agrego prop para decidir entre popular y cartelera para reutilizar el comp

    // if ternario para decidir que API usar
    const apiUrl = cualMostrar
      ? 'https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'
      : 'https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1';

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
    const { movies } = this.state;
    const { limit } = this.props;  // con esta prop limito cuantas se muestran para reutilizar el comp en Home y ver más

    // si hay tal límite, muestro {5} películas, sino todas
    const peliculasLimit = limit ? movies.slice(0, limit) : movies;

    // en el Link, si existe un límite, muestra el botón, sino no
    return (
      <section className='popular-container'>
        <div className="tituloGrupo">
          <div className="tituloConBoton">
            <h2 className="tituloSeccion">
              {this.props.cualMostrar ? "Películas en Cartelera" : "Películas Populares"}
            </h2>
            {limit ? <Link to={this.props.cualMostrar ? "/cartelera" : "/populares"}><button>Ver todas</button></Link> : null}
          </div>
        </div>
        <div className="popular-card">
          {peliculasLimit && peliculasLimit.length > 0
            ? peliculasLimit.map((movie, index) => (
              <Movie movie={movie} key={index} />
            ))
            : <p>Cargando...</p>}
        </div>
      </section>
    );
  }
}

export default MovieGrid;
