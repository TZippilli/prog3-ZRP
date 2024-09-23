import { Link } from "react-router-dom/cjs/react-router-dom.min"
import HomeMovies from "../Components/HomeMovies/HomeMovies"
import SearchForm from "../Components/SearchForm/SearchForm"


const Home = (props) => {
  return (
    <>
      <main>
       <SearchForm history={props.history}/>
       <h2>Películas Populares</h2>
       <Link to="/populares"> Ver todas</Link>
       <HomeMovies link={"/populares"} titulo={"Películas Populares"}  url={'https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>

       <h2>Películas en Cartelera</h2>
       <Link to="/cartelera"> Ver todas</Link>
       <HomeMovies  url={'https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>
      </main>
    </>
  )
}

export default Home