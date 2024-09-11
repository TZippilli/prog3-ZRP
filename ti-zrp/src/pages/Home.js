import PopularGrid from "../Components/PopularGrid/PopularGrid"
import SearchForm from "../Components/SearchForm/SearchForm"


const Home = () => {
  return (
    <>
      <main>
       <SearchForm />
       <PopularGrid limit={5} />
      </main>
    </>
  )
}

export default Home