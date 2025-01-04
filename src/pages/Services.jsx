import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const Services = () => {
    useEffect(() => {
        document.title = 'Services';
    }, [])
    // load all services data from the server
    const services = useLoaderData()

    // searched services data
    const [searchedServices, setSearchedServices] = useState(services)


    // search services function
    const handleSearch = (e) => {
        const inputValue = e.target.value.toLowerCase();
        const filter = services.filter(service => service.title.toLowerCase().includes(inputValue));
        setSearchedServices(filter)
    }

    return (
        <div className="p-5 md:p-10 w-11/12 mx-auto">
            <div>
                <h1 className="text-3xl text-center underline text-pink-500 py-5">All Services</h1>

                <div className="md:w-1/2 lg:w-1/4 py-3 mb-5 mx-auto">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" onKeyUp={handleSearch} id="search" className="grow" placeholder="Find Your Best Movies" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>

                <div className="grid grid-cols-1 gap-10">
                    {
                        searchedServices < 1
                            ?
                            <h1 className='text-2xl text-center'>No Services Found</h1>
                            :
                            searchedServices.map(service => <div key={service._id}
                                className='border-2 border-gray-200 p-5 rounded-lg flex flex-col justify-between gap-5'
                            >
                                <div>
                                    <img src={service?.image} alt={service?.title} className='w-full h-60 object-contain rounded-lg' />
                                </div>
                                <div className='space-y-2 flex flex-col justify-between text-center'>
                                    <Link to={`/services/${service?._id}`}><h2 className='text-2xl font-bold hover:text-pink-500 transition'>{service?.title}</h2></Link>


                                    <p>{service?.description.slice(1, 100)}......</p>
                                    <h2 >
                                        <span className="font-bold">Service Area: </span >
                                        {service?.service_area}
                                    </h2>
                                    <h2 >
                                        <span className="font-bold">Price: </span >
                                        <span className='text-2xl font-bold text-pink-500'>${service?.price}/month</span>
                                    </h2>

                                    <div className='flex items-center gap-2 justify-center'>
                                        <h1 className="font-bold">Service Provider: </h1>
                                        <img
                                            className='w-10 h-10 object-cover rounded-full'
                                            src={service?.provider_image} alt={service?.provider_name} />
                                        <h2 className='font-bold'>{service?.provider_name}</h2>
                                    </div>

                                    <Link to={`/services/${service._id}`}
                                        className="btn bg-pink-500 hover:bg-gray-800 w-full text-white">
                                        View Details
                                    </Link>
                                </div>
                            </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;