import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../private pages/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    useEffect(() => {
        document.title = 'Register';
    }, [])

    const { createUser, googleLogin, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()


    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const notify = () => {
        toast.error("Registration Failed", {
            position: "top-center"
        })

    }
    const notify3 = () => {
        toast.success("Account Created Successfully", {
            position: "top-center"
        })

    }



    const handleRegister = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.image_link.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userInfo = { displayName, photoURL, email, password }

        const validate = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!validate.test(password)) {
            setError(`Must have an Uppercase, a Lowercase letter in the password and Length must be at least 6 character`);
            return;
        }

        createUser(email, password)
            .then(() => {
                fetch('https://learn-plus-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                }
                )
                    .then(res => res.json())
                    .then(data => {

                        fetch(`https://learn-plus-server.vercel.app/users/${email}`)
                            .then(res => res.json())
                            .then(data => {
                                const { displayName, photoURL } = data
                                const userInfo = { displayName, photoURL }
                                updateUser(userInfo)
                                    .then(() => { })
                                    .catch(err => { })
                            })


                    })
                notify3()
                setTimeout(() => {
                    navigate('/')
                }, 2000)

            })
            .catch(err => {
                setError(err.message)
                notify()
            })
    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate('/')
            })
            .catch(err => {
                notify()
            })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <div className="bg-base-200 min-h-screen">
                <div className="hero-content">
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">

                        <div className="text-center py-3">
                            <Link to='/'><a className="uppercase text-md md:text-xl">Learn <span className="text-pink-500">Plus</span></a></Link>
                        </div>

                        <h2 className='text-center text-3xl py-3'>Create a new Account</h2>

                        <button onClick={handleGoogleLogin} className="btn uppercase text-blue-600 w-60 mx-auto mb-5"><FcGoogle className="text-xl"></FcGoogle> Login With Google</button>
                        <p className="text-center"> OR </p>
                        <hr />
                        <form onSubmit={handleRegister} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>

                                <input type="text" name="image_link" placeholder="Your Image Link" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />

                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                                <span onClick={handleShowPassword} className='absolute right-4 bottom-4'>
                                    {
                                        !showPassword ? <FaEye></FaEye> : <FaEyeSlash />

                                    }
                                </span>

                            </div>

                            {
                                error && <p className="text-red-400 p-2">{error}</p>
                            }

                            <div className="form-control mt-6">
                                <button className="btn bg-pink-500 hover:bg-pink-500 hover:text-black text-white uppercase">Register</button>
                            </div>
                            <p>Already have an account? <Link to='/login' className='text-pink-700'>Login</Link>  </p>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;