import "./Movie.css"
import { Link } from "react-router-dom";
import { Component } from "react";

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
  //revisar en el Link la ruta que le voy a poner al detalle
    render() {
      const { id, title, poster_path, overview } = this.props.movie;
  
      return (
        <article className='movie-card'>
          <div className="card-content">
            <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} />
            <br />
            <Link to={`/movies/${id}`}>{title}</Link> 
            <button className="botonDescripcion" onClick={() => this.verDescripcion()}> 
              {this.state.showExtra ? "Ocultar descripción" : "Ver descripción"}
            </button>
            {this.state.showExtra && <p>{overview}</p>}

            <button className='botonDetalle'>Ver detalle</button> 
          </div>
        </article>
      );
    }
  } //cambiar el ver detalle por un link en todo el espacio de la pelicula que lleve al detalle
  
  export default Movie;
  
  