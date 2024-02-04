import { HiMiniCheck, HiMiniClock, HiMiniHeart } from "react-icons/hi2";
import { toast } from "react-toastify";
import tagIcon from "../../assets/icons/tag.svg";
import { useMovieContext } from "../../contexts/MovieContext";
import { itemFoundInArray } from "../../utils/common";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
    const { movieData, dispatch } = useMovieContext();

    return (
        <figure
            className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl cursor-pointer"
            onClick={() => {
                dispatch({
                    type: "OPEN_MOVIE_MODAL",
                    movie,
                });
            }}
        >
            <img className="w-full object-cover" src={movie.poster} alt="" />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{movie.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                <Rating value={movie.rating} />
                {!movie.isUpcoming ? (
                    <div className="flex gap-4 items-center justify-center flex-wrap">
                        <button
                            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm flex-auto"
                            onClick={(e) => {
                                e.stopPropagation();

                                if (itemFoundInArray(movieData.cartItems, movie.id)) {
                                    toast.warning(`${movie.title} already exists in cart`);
                                } else {
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        movie,
                                    });
                                    toast.success(`${movie.title} added to cart`);
                                }
                            }}
                        >
                            <img src={tagIcon} />
                            <span>
                                ${movie.price} | {itemFoundInArray(movieData.cartItems, movie.id) ? "Added" : "Add to Cart"}
                            </span>
                        </button>

                        <div className="flex gap-4 items-center justify-center">
                            <button
                                className="py-2 px-3 border border-primary rounded-lg text-sm text-primary"
                                onClick={(e) => {
                                    e.stopPropagation();

                                    dispatch({
                                        type: "TOGGLE_IS_WATCH_LATER",
                                        movie,
                                    });

                                    toast.info(`${movie.title} ${!movie.isWatchLater ? "added to" : "removed from"} watch later`);
                                }}
                            >
                                {movie.isWatchLater ? <HiMiniCheck size={16} /> : <HiMiniClock size={16} />}
                            </button>
                            <button
                                className="py-2 px-3 border border-primary rounded-lg text-sm text-primary"
                                onClick={(e) => {
                                    e.stopPropagation();

                                    dispatch({
                                        type: "TOGGLE_IS_FAVORITE",
                                        movie,
                                    });

                                    toast.info(`${movie.title} ${!movie.isFavorite ? "added to" : "removed from"} favorite`);
                                }}
                            >
                                {movie.isFavorite ? <HiMiniHeart size={16} color="red" /> : <HiMiniHeart size={16} />}
                            </button>
                        </div>
                    </div>
                ) : (
                    <button className="bg-gray-500 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm w-full">
                        <HiMiniClock size={16} />
                        <span>Comming Soon</span>
                    </button>
                )}
            </figcaption>
        </figure>
    );
}
