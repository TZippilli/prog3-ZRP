import { Component } from "react";
import './BotonFav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //descargo libreria para icono de estrella
import { faStar as faStarFilled } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

class BotonFav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      esFavorito: false
    }
  }

  componentDidMount() {
    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
      const parsedArray = JSON.parse(storage)
      const estaEnFavoritos = parsedArray.includes(this.props.id)
      this.setState({
        esFavorito: estaEnFavoritos
      })
    }
  }

  agregarFavorito() {
    const storage = localStorage.getItem('favoritos')
    if (storage !== null) {
      const parsedArray = JSON.parse(storage)
      parsedArray.push(this.props.id)
      const stringArray = JSON.stringify(parsedArray)
      localStorage.setItem('favoritos', stringArray)

    } else {
      const primerMovie = [this.props.id]
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
    const favoritosRestantes = parsedArray.filter(id => id !== this.props.id)
    const stringArray = JSON.stringify(favoritosRestantes)
    localStorage.setItem('favoritos', stringArray)
    this.setState({
      esFavorito: false
    })
  }

  render() {
    return (
      <>
        <div className="boton-fav">
          <button onClick={() => !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito()}>
            {!this.state.esFavorito ? <FontAwesomeIcon icon={faStarEmpty} /> : <FontAwesomeIcon icon={faStarFilled} />}
          </button>
        </div>
      </>
    )
  }

}

export default BotonFav;