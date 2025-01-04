import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import Footer from "../components/Footer";
import NotLogged from "../components/NotLogged";
import Loader from "../components/Loader";
import { AuthContext } from "../private pages/AuthProvider";

const PrivateRoute = () => {
    const { user, loader, theme } = useContext(AuthContext)
    if (loader) {
        return <Loader></Loader>
    }

    return (
        <div data-theme={theme}>
            <Navbar></Navbar>
            <div className="w-full md:w-11/12 mx-auto">
                {
                    user ? <Outlet></Outlet> : <NotLogged></NotLogged>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PrivateRoute;