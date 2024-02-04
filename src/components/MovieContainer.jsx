import { TbDatabaseSearch } from "react-icons/tb";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "./movie/MovieCard";
import MovieModal from "./movie/MovieModal";
import MovieSidebar from "./movie/MovieSidebar";

export default function Header() {
    const { movieData, seachKeyword, movieFilter } = useMovieContext();

    const searchMovies = movieData.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(seachKeyword.toLowerCase());
    });

    const moviesWithFilter = searchMovies.filter((movie) => {
        if (movieFilter === "trending") {
            return movie.isTrending;
        }

        if (movieFilter === "newReleases") {
            return movie.isNewRelease;
        }

        if (movieFilter === "comingSoon") {
            return movie.isUpcoming;
        }

        if (movieFilter === "favourites") {
            return movie.isFavorite;
        }

        if (movieFilter === "watchLater") {
            return movie.isWatchLater;
        }
        return movie;
    });

    return (
        <main className="pt-32 mb-8">
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <MovieSidebar />

                <div className="content">
                    {moviesWithFilter.length > 0 ? (
                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                            {moviesWithFilter.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <p className="bg-primary text-dark py-3 px-5 rounded-md flex gap-2 items-center">
                            <TbDatabaseSearch size={20} />
                            No Movie Found
                        </p>
                    )}
                </div>

                {movieData.showMovieModal && <MovieModal />}
            </div>
        </main>
    );
}
