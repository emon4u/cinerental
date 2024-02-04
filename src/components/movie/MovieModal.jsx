import { HiStar } from "react-icons/hi2";
import tagIcon from "../../assets/icons/tag.svg";
import { useMovieContext } from "../../contexts/MovieContext";
import { itemFoundInArray } from "../../utils/common";

export default function MovieModal() {
    const { movieData, dispatch } = useMovieContext();

    const movie = movieData.modalMovieInfo;

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
            <div
                className="absolute z-10 inset-0 cursor-pointer"
                onClick={() => {
                    dispatch({
                        type: "CLOSE_MOVIE_MODAL",
                    });
                }}
            ></div>
            <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden items-center">
                    <img className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]" src={movie.poster} alt="Poster" />
                    <div className="p-5 lg:p-11">
                        <div className="">
                            <h2 className="text-2xl lg:text-[38px] lg:leading-[1.1] mb-3 font-bold">{movie.title}</h2>
                            <span className="flex items-center text-base text-[#9fa0a4] dark:text-[#575A6E] mb-2">
                                {movie.release_year}
                                <span className="w-[5px] h-[5px] bg-[#9fa0a4] dark:bg-[#575A6E] mx-3 rounded"></span>
                                {movie.runtime}Minutes
                            </span>
                            <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] mb-2">{movie.genre}</span>
                            <span className="text-primary mb-5 flex items-center">
                                <HiStar size={18} className="relative top-[-1px] mr-1" />
                                {movie.rating}/5
                            </span>
                        </div>
                        <p className="text-sm lg:text-base mb-8 lg:mb-16">{movie.plot}</p>
                        <div className="grid lg:grid-cols-2 gap-2">
                            <button
                                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                onClick={() => {
                                    if (itemFoundInArray(movieData.cartItems, movie.id)) {
                                        console.log("Item Already in cart");
                                    } else {
                                        dispatch({
                                            type: "ADD_TO_CART",
                                            movie,
                                        });
                                    }
                                }}
                            >
                                <img src={tagIcon} />
                                <span>
                                    ${movie.price} | {itemFoundInArray(movieData.cartItems, movie.id) ? "Added" : "Add to Cart"}
                                </span>
                            </button>
                            <button
                                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                                onClick={() => {
                                    dispatch({
                                        type: "CLOSE_MOVIE_MODAL",
                                    });
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
