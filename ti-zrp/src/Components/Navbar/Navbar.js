import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src="./logoPandafilm.png" alt="Logo" /></Link>
      </div>
      <ul className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/populares">Populares</Link>
        <Link to="/cartelera">Cartelera</Link>
      </ul>
      <div className="user">
        <span>Kung Fu Panda</span>
        <img className="fotoPerfil" src="./fotoPerfil.png" alt="User" />
      </div>
    </nav>
  );
};

export default Navbar;
