import { createContext, useContext, useReducer, useState } from "react";
import { getDefaultMovies } from "../data/movies";
import movieReducers from "../reducers/movieReducers";

const MovieContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useMovieContext() {
    return useContext(MovieContext);
}

export default function MovieProvider({ children }) {
    const [movieData, dispatch] = useReducer(movieReducers, {
        movies: getDefaultMovies(),
        showMovieModal: false,
        modalMovieInfo: null,
        cartItems: [],
    });
    const [seachKeyword, setSeachKeyword] = useState("");
    const [showCartModal, setShowCartModal] = useState(false);
    const [movieFilter, setMovieFilter] = useState("allMovies");

    const providerData = {
        movieData,
        dispatch,
        seachKeyword,
        setSeachKeyword,
        movieFilter,
        setMovieFilter,
        showCartModal,
        setShowCartModal,
    };

    return <MovieContext.Provider value={providerData}>{children}</MovieContext.Provider>;
}
