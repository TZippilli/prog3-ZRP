import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from './pages/Favoritos';
import Footer from './Components/Footer/Footer';
import PaginaPopulares from './pages/Populares';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritos" exact component={Favoritos} />
        <Route path="/populares" exact component={PaginaPopulares} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

