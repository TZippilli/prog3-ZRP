import "./PopularGrid.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import Popular from "../Popular/Popular";



class PopularGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [] 
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1') //no uso options porque no me andaba
      .then(response => response.json())
      .then(data => {
        if (data && data.results) { 
          this.setState({ popularMovies: data.results });
        } else {
          console.error("No se encuentran películas");
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    const { popularMovies } = this.state;
    const { limit } = this.props;  // creo esta prop para limitar el display en Home y reutilizar el componente

    // si hay tal límite, muestro {limit} peliculas, sino todas
    const popularLimit = limit ? popularMovies.slice(0, limit) : popularMovies;
    //en el Link, si existe un limite, muestra el boton, sino no
    return (
      <section className='popular-container'>
        <div className="tituloGrupo">
        <h2 className="tituloSeccion">Películas Populares</h2>
        {limit ? <Link to="/populares"><button>Ver todas</button></Link> : null}
        </div> 
        <div className="popular-card">
          {popularLimit && popularLimit.length > 0
            ? popularLimit.map((movie, index) => (
              <Popular movie={movie} key={index} />
            ))
            : <p>Cargando...</p>} 
        </div>
      </section>
    );
  }
}

export default PopularGrid;
