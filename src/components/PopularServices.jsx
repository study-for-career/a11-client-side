import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const PopularServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('https://learn-plus-server.vercel.app/services')
            .then(res => setServices(res.data))
    }, [])
// Popular services section
    return (
        <div className="p-5">
            <div>
                <h1 className="text-3xl text-pink-500 py-5">Popular Services</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        services.slice(0, 6).map(service => <div key={service._id}
                            className='border-2 border-gray-200 p-5 rounded-lg flex flex-col justify-between gap-5'
                        >
                            <div>
                                <img src={service?.image} alt={service?.title} className='w-full h-72 object-contain rounded-lg' />
                            </div>
                            <div className='space-y-2 flex flex-col justify-between'>
                                <Link to={`/services/${service?._id}`}><h2 className='text-2xl font-bold hover:text-pink-500 transition'>{service?.title}</h2></Link>

                                <div className='flex items-center gap-2'>
                                    <img
                                        className='w-10 h-10 object-cover rounded-full'
                                        src={service?.provider_image} alt={service?.provider_name} />
                                    <h2 className='font-bold'>{service?.provider_name}</h2>
                                </div>
                                <p>{service?.description.slice(0, 100)}......</p>
                                <h2 >
                                    <span className="font-bold">Price: </span >
                                    <span className='text-2xl font-bold text-pink-500'>${service?.price}/month</span>
                                </h2>

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

export default PopularServices;