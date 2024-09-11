import MovieGrid from "../Components/MovieGrid/MovieGrid"
import SearchForm from "../Components/SearchForm/SearchForm"


const Home = () => {
  return (
    <>
      <main>
       <SearchForm />
       <MovieGrid limit={5} cualMostrar={true}/>
       <MovieGrid limit={5} cualMostrar={false}/>
      </main>
    </>
  )
}

export default Home