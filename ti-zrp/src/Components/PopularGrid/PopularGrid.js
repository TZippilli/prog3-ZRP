import "./PopularGrid.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import Popular from "../Popular/Popular";
import { options } from "../../options";


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

    return (
      <section className='popular-container'>
        <h2 className="tituloSeccion">Películas Populares</h2>
        <div className="popular-card">
          {popularMovies && popularMovies.length > 0
            ? popularMovies.map((movie, index) => (
              <Popular movie={movie} key={index} />
            ))
            : <p>Cargando...</p>} 
        </div>
      </section>
    );
  }
}

export default PopularGrid;
