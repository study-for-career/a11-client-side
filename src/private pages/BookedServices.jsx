import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

// Show Booked/Purchased Services 
const BookedServices = () => {
    useEffect(() => {
        document.title = 'Booked Services';
    }, [])


    const { user } = useContext(AuthContext)
    const [bookedServices, setBookedServices] = useState([])


    useEffect(() => {
        fetch(`https://learn-plus-server.vercel.app/purchased_services/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBookedServices(data)
            })
    }, [])

    return (
        <div>
            {
                bookedServices.length < 1 ?
                    <div className="py-16 flex flex-col items-center gap-5 max-h-screen">
                        <h1 className="text-center text-2xl">Sorry, You haven't purchased any services</h1>
                        <Link to='/services' className="btn btn-info">See All Services</Link>
                    </div>
                    :
                    <div className="py-12">
                        <h1 className="text-3xl text-pink-500 uppercase py-10 text-center">My Booked Services</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                bookedServices.map(bookedservice => {

                                    return <div key={bookedservice._id} className="flex flex-col justify-between gap-3 shadow-md border-2 rounded-lg p-5">
                                        <img
                                            className="rounded-lg h-60"
                                            src={bookedservice?.service_image} alt={bookedservice?.title} />
                                        <div className="flex justify-between">
                                            <h2 className="text-2xl font-bold text-pink-500">{bookedservice?.service_name}</h2>
                                            <h2 className="border-2 rounded-full px-2 border-pink-200"><span className="font-bold"></span >{bookedservice?.serviceStatus}</h2>
                                        </div>


                                        <h2 ><span className="font-bold">Service Purchase Date: </span >{bookedservice?.service_date}</h2>
                                        <h2 ><span className="font-bold">Provider: </span >{bookedservice?.provider_name}</h2>

                                    </div>
                                })
                            }
                        </div>
                    </div>
            }

        </div>
    );
};

export default BookedServices;