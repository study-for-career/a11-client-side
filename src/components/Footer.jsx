import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/learn_plus_logo.png";


const Footer = () => {

    const toFacebook = () => {
        window.open('https://web.facebook.com/mdzahidulislam08/', '_blank')
    }
    const toInstagram = () => {
        window.open('https://www.instagram.com/', '_blank')
    }
    const toLinkedin = () => {
        window.open('https://bd.linkedin.com/', '_blank')
    }
    return (
        <footer className="bg-gray-800 text-white">
            <div className="w-full md:w-11/12 mx-auto flex-col md:flex md:flex-row space-y-2  justify-between items-center p-2 md:p-4">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Learn Plus Logo" className="w-10 h-10 text-white" />
                    <Link to='/'>
                        <p className="uppercase text-md md:text-xl">Learn <span className="text-pink-500">Plus</span></p>
                    </Link>
                </div>


                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <aside className="grid-flow-col items-center">
                    <p>Call Now: +113244313-10 (Turkey)</p>
                </aside>
                <nav className="grid-flow-col flex gap-4 md:place-self-center md:justify-self-end">
                    <button className="text-2xl text-pink-500" onClick={toFacebook}><FaFacebook /></button>
                    <Link className="text-2xl text-pink-500" onClick={toInstagram} ><FaInstagram /></Link>
                    <Link className="text-2xl text-pink-500" onClick={toLinkedin} ><FaLinkedin /></Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;