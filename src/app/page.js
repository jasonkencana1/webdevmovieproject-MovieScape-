import Header from "./components/MovieList/Header";
import MovieList from "./components/MovieList"
require('dotenv').config();

const Home = async () =>  {
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiKey = process.env.API_KEY;
const response = await fetch(`${apiBaseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
const topMovie = await response.json()


  return (
    <>
    {/* Most Popular Components */}
      <section>
        <Header title="Most Popular" linkTitle="All Movies" linkHref="/popular"/>
        <MovieList movies={topMovie.results}/>
      </section>

    {/* Latest Components */}
      <section>
        <Header title="Latest Movie" linkTitle="All Movies" linkHref="/new"/>
        <MovieList movies={topMovie.results}/>
      </section>
    </>
  )
}

export default Home