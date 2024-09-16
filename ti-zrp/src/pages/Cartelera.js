import MovieGrid from "../Components/MovieGrid/MovieGrid"

const PaginaCarteleras = () => {
    return (
      <>
        <main>
         <MovieGrid url={'https://api.themoviedb.org/3/movie/now_playing?api_key=e6a0d8ba2d9778d0953077400f26f011&language=en-US&page=1'} link={"/cartelera"} titulo={"Películas en Cartelera"}/>
        </main>
      </>
    )
  }
  
  export default PaginaCarteleras

  