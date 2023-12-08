import Header from "./components/MovieList/Header";
import MovieList from "./components/MovieList"


const Page = async () =>  {
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const response = await fetch(`${apiBaseUrl}/movie/popular?api_key=${apiKey}`);
const topMovie = await response.json()


  return (
    <>
    {/* Most Popular Components */}
      <section>
        <Header title="Most Popular" linkTitle="All Movies" linkHref="/popular"/>
        <MovieList movies={topMovie.results}/>
      </section>
    </>
  )
}

export default Page