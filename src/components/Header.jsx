import MainLogo from "../assets/icons/logo.svg";
import MoonIcon from "../assets/icons/moon.svg";
import RingIcon from "../assets/icons/ring.svg";
import CartIcon from "../assets/icons/shopping-cart.svg";
import SunIcon from "../assets/icons/sun.svg";
import { useMovieContext } from "../contexts/MovieContext";
import { useThemeContext } from "../contexts/ThemeContext";
import MovieCartModal from "./movie/MovieCartModal";

export default function Header() {
    const { darkMode, setDarkMode } = useThemeContext();
    const { movieData, showCartModal, setShowCartModal } = useMovieContext();

    return (
        <>
            <header className="fixed w-full dark:bg-body bg-white shadow-lg">
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="/">
                        <img src={MainLogo} width="139" height="26" alt="" />
                    </a>

                    <ul className="flex items-center space-x-5">
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={RingIcon} width="24" height="24" alt="Ring" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setDarkMode(!darkMode);
                                }}
                            >
                                <img src={darkMode ? SunIcon : MoonIcon} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowCartModal(!showCartModal);
                                }}
                            >
                                <img src={CartIcon} width="24" height="24" alt="Cart" />
                                {movieData.cartItems.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-primary text-[#171923] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                        {movieData.cartItems.length}
                                    </span>
                                )}
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            {showCartModal && <MovieCartModal />}
        </>
    );
}
