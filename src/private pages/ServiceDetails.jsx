import { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


// single service details
const ServiceDetails = () => {
    // dynamically change the title of the page
    useEffect(() => {
        document.title = 'Service Details';
    }, [])

    const service = useLoaderData()
    const navigate = useNavigate();
    console.log(service)

    const { _id } = service

    const handleBookNow = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2 py-5 md:p-10">
                <div className="space-y-3 order-2 md:order-1">

                    <div>
                        <h1 className="text-xl font-bold">Service Provider Information</h1>
                        <div className="flex items-center gap-2">
                            <img src={service?.provider_image} alt=""
                                className="w-10 h-10 rounded-full" />
                            <h2>{service?.provider_name}</h2>
                        </div>
                        <h2>
                            <span className="font-bold">Service Location: </span>
                            {service?.service_area}</h2>
                    </div>
                    <h1 className="text-xl font-bold">Service Information</h1>
                    <h1 className="text-2xl lg:text-2xl font-bold text-pink-500">{service?.title}</h1>

                    <p><span className=" text-xl text-pink-500">Description: </span >{service?.description}</p>
                    <p><span className=" text-xl text-pink-500">Price: </span > ${service?.price}/month</p>
                    <div className="text-center">

                        <button onClick={() => handleBookNow(_id)} className="btn btn-info uppercase w-full"> Book Now</button>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <img
                        className="rounded-lg h-60 lg:h-96 w-full"
                        src={service?.image} alt={service?.title} />
                </div>

            </div>
            <div className="w-36 mx-auto py-10">
                <Link to='/services' className="btn uppercase bg-gray-800 text-white  hover:bg-gray-700">See all Services</Link>
            </div>
        </div>
    );
};

export default ServiceDetails;