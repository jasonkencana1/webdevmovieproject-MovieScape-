import MovieList from "./components/MovieList"
require('dotenv').config();

const Home = async () =>  {
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiKey = process.env.API_KEY;
  
const response = await fetch(`${apiBaseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);

const movie = await response.json()
console.log(movie.results)
console.log(response.headers);

  return (
    <div>
      <h1>Most Popular</h1>
        {movie.results.map(results => {
          return <MovieList title={results.title} images={`https://image.tmdb.org/t/p/w500${results.poster_path}`} />
        })}
    </div>
  )
}

export default Home