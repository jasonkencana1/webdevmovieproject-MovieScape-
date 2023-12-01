import Image from "next/image"
import Link from "next/link"

const MovieList = ({ movies }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {movies.map((movie) => (
                <div key={movie.mal_id} className="shadow-xl">
                <Link href={`/${movie.mal_id}`} className="cursor-pointer">
                    <Image 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt="..." 
                        width={500} 
                        height={700} 
                        className="w-full max-h-64 object-cover"
                    />

                <h3 className="font-bold md:text-l text-sm p-4">{movie.title}</h3>
                </Link>
        </div>
        ))}
    </div>
    );
}

export default MovieList