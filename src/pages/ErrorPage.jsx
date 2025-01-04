import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    useEffect(() => {
            document.title = 'Error Page';
          }, [])

    const navigate = useNavigate()
    const goToHomePage = () => {
        navigate('/')
    }

    return (
        <div className="flex justify-center items-center flex-col gap-3 pt-20">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-4xl font-bold">Page Not Found</h2>
            <button onClick={goToHomePage} className="btn bg-pink-500  text-white uppercase">Back to Home</button>
        </div>
    );
};

export default ErrorPage;