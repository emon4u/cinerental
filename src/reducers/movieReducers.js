export default function movieReducers(movieData, action) {
    switch (action.type) {
        case "OPEN_MOVIE_MODAL":
            return {
                ...movieData,
                showMovieModal: true,
                modalMovieInfo: action.movie,
            };
        case "CLOSE_MOVIE_MODAL":
            return {
                ...movieData,
                showMovieModal: false,
                modalMovieInfo: null,
            };
        case "ADD_TO_CART":
            return {
                ...movieData,
                cartItems: [...movieData.cartItems, action.movie],
            };
        case "REMOVE_FROM_CART":
            return {
                ...movieData,
                cartItems: movieData.cartItems.filter((movie) => movie.id != action.movie.id),
            };
        case "TOGGLE_IS_FAVORITE":
            return {
                ...movieData,
                movies: movieData.movies.map((movie) => {
                    if (movie.id === action.movie.id) {
                        return {
                            ...movie,
                            isFavorite: !movie.isFavorite,
                        };
                    } else {
                        return movie;
                    }
                }),
            };
        case "TOGGLE_IS_WATCH_LATER":
            return {
                ...movieData,
                movies: movieData.movies.map((movie) => {
                    if (movie.id === action.movie.id) {
                        return {
                            ...movie,
                            isWatchLater: !movie.isWatchLater,
                        };
                    } else {
                        return movie;
                    }
                }),
            };
        default: {
            throw Error(`No action matched with ${action.type}`);
        }
    }
}
