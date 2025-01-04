import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../private pages/AuthProvider";
import logo from '../assets/learn_plus_logo.png'

const Navbar = () => {

    const { logoutUser, user, setTheme, theme } = useContext(AuthContext)

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const menuLists = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>

    </>

    // Dropdown items for dashboard
    const menuListsDropdown = <>
        <li ><Link className="hover:bg-gray-700" to='/add_service'>Add Service</Link></li>
        <li ><Link className="hover:bg-gray-700" to='/manage_services'>Manage Service</Link></li>
        <li ><Link className="hover:bg-gray-700" to='/booked_services'>Booked-Services</Link></li>
        <li ><Link className="hover:bg-gray-700" to='/service_todo'>Service-To-Do</Link></li>
    </>

    // logout user on button click
    const handleLogout = () => {
        logoutUser()
            .then(() => {

            })
            .catch(err => {

            })
    }

    return (
        <div className="bg-gray-800">
            <div className="w-full md:w-11/12 mx-auto flex justify-between items-center  text-white p-2">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Learn Plus Logo" className="w-10 h-10 text-white" />
                    <Link to='/'>
                        <p className="uppercase text-md md:text-xl">Learn <span className="text-pink-500">Plus</span></p>
                    </Link>
                    <input type="checkbox" onClick={handleTheme} value="synthwave" className="toggle theme-controller" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="block lg:hidden">
                        <ul className="flex gap-4">
                            <li className={user ? 'hidden' : 'block'}><NavLink to='/login'>Login</NavLink></li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex gap-4">

                            {
                                menuLists
                            }

                            <li className={user ? 'hidden' : 'block'}><NavLink to='/login'>Login</NavLink></li>

                        </ul>


                    </div>
                    {/* Dropdown for menulists */}
                    <div className="dropdown dropdown-end ">

                        {/* After login Area */}
                        <div tabIndex={0} role="button" className={user ? "flex" : "hidden"}>


                            <ul><li>Dashboard</li></ul>

                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-auto p-2 shadow block">
                            {
                                menuListsDropdown
                            }

                        </ul>
                    </div>

                    {/* Dropdown for all devices */}
                    <div className={user ? "dropdown dropdown-end " : "hidden"}>

                        {/* After login Area */}
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">

                            <div className="w-10 rounded-full">

                                <img
                                    alt="User Profile"
                                    src={user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-auto p-2 shadow bg-gray-800 text-white">
                            <li><title>{user?.displayName}</title></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;