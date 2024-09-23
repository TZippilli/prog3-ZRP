import MovieGrid from "../Components/MovieGrid/MovieGrid"
import SearchForm from "../Components/SearchForm/SearchForm"


const Home = (props) => {
  return (
    <>
      <main>
       <SearchForm history={props.history}/>
      
      </main>
    </>
  )
}

export default Home