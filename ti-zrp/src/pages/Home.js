import { Link } from "react-router-dom/cjs/react-router-dom.min"
import HomeMovies from "../Components/HomeMovies/HomeMovies"
import SearchForm from "../Components/SearchForm/SearchForm"


const Home = (props) => {
  return (
    <>
      <main>
       <SearchForm history={props.history}/>
       <h3>Películas Populares</h3>
       <div className="botonesGeneral">
       <Link to="/populares"> 
       <button>Ver todas</button>
       </Link>
       </div>
       <HomeMovies link={"/populares"} titulo={"Películas Populares"}  url={'https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>

       <h3>Películas en Cartelera</h3>
       <div className="botonesGeneral">
       <Link to="/cartelera"> 
       <button>Ver todas</button>
       </Link>
       </div>
       <HomeMovies  url={'https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>
      </main>
    </>
  )
}

export default Home