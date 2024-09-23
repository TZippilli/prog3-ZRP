import "./MovieGrid.css";
import { Link } from "react-router-dom";
import { Component } from "react";

import React from 'react'
import Movie from "../Movie/Movie";

const MovieGrid = ({pelis}) => {
  return (
    <div className="popular-container">
    {pelis.map((peli) => <Movie movie={peli} />)}
    </div>
  )
}

export default MovieGrid
