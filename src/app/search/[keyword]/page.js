import Header from '@/app/components/MovieList/Header';
import MovieList from '@/app/components/MovieList';

const SearchPage = async ({ params }) => {
    const searchKeyword = params.keyword;
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const response = await fetch(`${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${searchKeyword}`);
    const searchData = await response.json();

    return (
        <>
            {/* Searched For Components*/}
            <section>
                <Header title={`Search for ${searchKeyword}`}/>
                <MovieList movies={searchData.results} />
            </section>
        </>
    );
};

export default SearchPage;



