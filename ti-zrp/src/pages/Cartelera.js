import MovieGrid from "../Components/MovieGrid/MovieGrid"

const PaginaCarteleras = () => {
    return (
      <>
        <main>
         <MovieGrid url={'https://api.themoviedb.org/3/movie/popular?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'}/>
        </main>
      </>
    )
  }
  
  export default PaginaCarteleras