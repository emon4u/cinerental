import { HiCalendarDays, HiFire, HiMiniClock, HiMiniHeart, HiOutlineFolderPlus, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { useMovieContext } from "../../contexts/MovieContext";
import MovieSearch from "./MovieSearch";

export default function MovieSidebar() {
    const { movieFilter, setMovieFilter } = useMovieContext();

    return (
        <aside>
            <ul className="space-y-2">
                <li className="mb-5">
                    <MovieSearch />
                </li>
                <li>
                    <a
                        className={`flex items-center space-x-2 px-5 py-3 rounded-lg${movieFilter === "allMovies" && " active-filter"}`}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault;
                            setMovieFilter("allMovies");
                        }}
                    >
                        <HiOutlineSquare3Stack3D size={18} />
                        <span>All Movies</span>
                    </a>
                </li>
                <li>
                    <a
                        className={`flex items-center space-x-2 px-5 py-3 rounded-lg${movieFilter === "trending" && " active-filter"}`}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault;
                            setMovieFilter("trending");
                        }}
                    >
                        <HiFire size={18} />
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a
                        className={`flex items-center space-x-2 px-5 py-3 rounded-lg${movieFilter === "newReleases" && " active-filter"}`}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault;
                            setMovieFilter("newReleases");
                        }}
                    >
                        <HiOutlineFolderPlus size={18} />
                        <span>New Releases</span>
                    </a>
                </li>
                <li>
                    <a
                        className={`flex items-center space-x-2 px-5 py-3 rounded-lg${movieFilter === "comingSoon" && " active-filter"}`}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault;
                            setMovieFilter("comingSoon");
                        }}
                    >
                        <HiCalendarDays size={18} />
                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a
                        className={`flex items-center space-x-2 px-5 py-3 rounded-lg${movieFilter === "favourites" && " active-filter"}`}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault;
                            setMovieFilter("favourites");
                        }}
                    >
                        <HiMiniHeart size={18} />
                        <span>Favourites</span>
                    </a>
                </li>
                <li>
                    <a
                        className={`flex items-center space-x-2 px-5 py-3 rounded-lg${movieFilter === "watchLater" && " active-filter"}`}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault;
                            setMovieFilter("watchLater");
                        }}
                    >
                        <HiMiniClock size={18} />
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
