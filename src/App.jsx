import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import MovieProvider from "./contexts/MovieContext";
import ThemeProvder from "./contexts/ThemeContext";

function App() {
    return (
        <>
            <ThemeProvder>
                <MovieProvider>
                    <Header />
                    <MovieContainer />
                </MovieProvider>
                <Footer />
                <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick draggable theme="dark" />
            </ThemeProvder>
        </>
    );
}

export default App;
