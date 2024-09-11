import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./logoPandafilm.png" alt="Logo" />
      </div>
      <ul className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/populares">Populares</Link>
        <Link to="/cartelera">Cartelera</Link>
      </ul>
      <div className="user">
        <span>Nombre usuario</span>
        <img src="./logo192.png" alt="User" />
      </div>
    </nav>
  );
};

export default Navbar;
