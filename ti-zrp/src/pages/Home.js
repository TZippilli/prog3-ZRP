import PopularGrid from "../Components/PopularGrid/PopularGrid"
import SearchForm from "../Components/SearchForm/SearchForm"


const Home = () => {
  return (
    <>
      <main>
       <SearchForm />
       <PopularGrid />
      </main>
    </>
  )
}

export default Home