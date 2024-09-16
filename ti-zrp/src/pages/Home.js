import MovieGrid from "../Components/MovieGrid/MovieGrid"
import SearchForm from "../Components/SearchForm/SearchForm"


const Home = () => {
  return (
    <>
      <main>
       <SearchForm />
       <MovieGrid limit={5} url={'https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>
       <MovieGrid limit={5} url={'https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>
      </main>
    </>
  )
}

export default Home