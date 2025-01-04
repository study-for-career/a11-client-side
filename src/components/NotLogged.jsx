import { Link } from "react-router-dom";

const NotLogged = () => {
    return (
        <div className="py-16">
            <div className="flex flex-col gap-5 items-center justify-center py-20">
                <h1 className="text-3xl text-pink-500">Ooooops......</h1>
                <h3 className="text-2xl">You haven't login yet.</h3>
                <h2 className="text-2xl text-gray-800 uppercase">You must login to continue</h2>
                <Link to='/login' className="btn bg-pink-500 text-white hover:text-black">Login Now</Link>
            </div>
        </div>
    );
};

export default NotLogged;