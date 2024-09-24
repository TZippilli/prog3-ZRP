import "./Movie.css"
import { Link } from "react-router-dom";
import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //descargo libreria para icono de estrella
import { faStar as faStarFilled } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';



class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtra: false,
      esFavorito: false
    };
  }

  componentDidMount() {
    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
      const parsedArray = JSON.parse(storage)
      const estaEnFavoritos = parsedArray.includes(this.props.movie.id)
      this.setState({
        esFavorito: estaEnFavoritos
      })
    }
  }

  agregarFavorito() {
    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
      const parsedArray = JSON.parse(storage)
      parsedArray.push(this.props.movie.id)
      const stringArray = JSON.stringify(parsedArray)
      localStorage.setItem('favoritos', stringArray)
    } else {
      const primerMovie = [this.props.movie.id]
      const stringArray = JSON.stringify(primerMovie)
      localStorage.setItem('favoritos', stringArray)
    }
    this.setState({
      esFavorito: true
    })
  }

  sacarFavorito() {
    const storage = localStorage.getItem('favoritos')
    const parsedArray = JSON.parse(storage)
    const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id)
    const stringArray = JSON.stringify(favoritosRestantes)
    localStorage.setItem('favoritos', stringArray)

    this.setState({
      esFavorito: false
    })
  }

  verDescripcion() {
    this.setState({
      showExtra: !this.state.showExtra
    });
  }

  render() {
    const { id, title, poster_path, overview } = this.props.movie;

    return (
      <article className='movie-card'>
        <div className="card-content">
        <Link to={`/movies/${id}`}>{title}
          <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} />
          <br />
          </Link>
          <div className="botonContainer">
            <button className="botonDescripcion" onClick={() => this.verDescripcion()}>
              {this.state.showExtra ? "Ocultar descripción" : "Ver descripción"}
            </button>
            {this.state.showExtra && <p>{overview}</p>}
            <Link to={`/movies/${id}`}><button className="botonDetalle">Ver detalle</button></Link>
          </div>
          <button onClick={() => !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito()}>
            {!this.state.esFavorito ? <FontAwesomeIcon icon={faStarEmpty} /> : <FontAwesomeIcon icon={faStarFilled} />}
          </button>
          
        </div>
      </article>
    );
  }
}

export default Movie;