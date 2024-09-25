import "./Movie.css"
import { Link } from "react-router-dom";
import { Component } from "react";
import BotonFav from "../BotonFav/BotonFav";


class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtra: false
    };
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
          <div className="tituloMovie">
            <Link to={`/movies/${id}`}>{title}
              <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} />
              <br />
            </Link>
          </div>
          <div className="textoMovie">
            <div className="botonContainer">
              <button className="botonDescripcion" onClick={() => this.verDescripcion()}>
                {this.state.showExtra ? "Ocultar descripción" : "Ver descripción"}
              </button>
              {this.state.showExtra && <p>{overview}</p>}
              <Link to={`/movies/${id}`}><button className="botonDetalle">Ver detalle</button></Link>
              <BotonFav id={id} />
            </div>
          </div>


        </div>
      </article>
    );
  }
}

export default Movie;