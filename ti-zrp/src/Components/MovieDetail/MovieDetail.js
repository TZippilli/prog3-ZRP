import "./MovieDetail.css";
import { Component } from "react";
import BotonFav from "../BotonFav/BotonFav";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
   
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US`)
      .then(response => response.json())
      .then(data => {
        this.setState({ movie: data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { movie } = this.state;

    //si no hay peliculas o estan cargando:
    if (!movie) {
      return <img src="./gifLoader.gif" alt="loader" ></img>;
    }

    //destructuring para todos los campos que me pide la consigna
    const { title, poster_path, vote_average, release_date, runtime, overview, genres } = movie;
    const generos = genres.map(genre => genre.name).join(", ");
    //armo array de generos para luego usarlo

    return (
      <section className='movie-detail'>
        <div className="detail-content">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
          <div className="detail-text">
          <h2>{title}</h2>
          <p><strong>Calificación:</strong> {vote_average} / 10</p>
          <p><strong>Fecha de estreno:</strong> {release_date}</p>
          <p><strong>Duración:</strong> {runtime} minutos</p>
          <p><strong>Géneros:</strong> {generos}</p>
          <p><strong>Sinopsis:</strong> {overview}</p>
          <BotonFav  id={movie.id}/>
        </div>
        </div>
      </section>
    );
  }
}

export default MovieDetail;