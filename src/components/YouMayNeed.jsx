import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const YouMayNeed = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://learn-plus-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    // Another extra section for the home page
    return (
        <div className="p-5">
            <div>
                <h1 className="text-3xl text-pink-500 py-5">You May Need</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {
                        services.slice(2, 8).map(service => <div key={service._id}
                            className="border-2 border-gray-200 p-2 rounded-lg "
                        >
                            <div className="group relative">
                                <Link to={`/services/${service?._id}`}>
                                    <img src={service?.image} alt={service?.title}
                                        className="w-full h-72 object-cover rounded-lg group-hover:opacity-20"
                                    />
                                    <button className="btn bg-pink-500 text-white border-none hover:bg-pink-500 absolute bottom-32 left-8 text-sm opacity-0 group-hover:opacity-100">View Details</button>
                                </Link>

                            </div>
                            <div className="py-2">
                                <h2 className="">{service?.title}</h2>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default YouMayNeed;