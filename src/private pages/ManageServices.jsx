import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Swal from "sweetalert2";

const ManageServices = () => {
    useEffect(() => {
        document.title = 'Manage Services';
    }, [])
    const { user, loader } = useContext(AuthContext);
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get(`https://learn-plus-server.vercel.app/services_by_user/${user.email}`)
            .then(res => setServices(res.data))
    }, [])

    if (loader) {
        return <Loader></Loader>
    }

    const handleDeleteService = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://learn-plus-server.vercel.app/delete_service/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const remainingServices = services.filter(service => service._id !== id)
                            setServices(remainingServices)
                        }
                    })
                    .catch(err => console.log(err))
                Swal.fire({
                    title: "Deleted!",
                    text: "Service has been deleted.",
                    icon: "success"
                });
            }
        });



    }

    return (
        <div>
            {
                services.length < 1
                    ?
                    <div className="py-16 flex flex-col items-center gap-5 max-h-screen">
                        <h1 className="text-center text-2xl">Sorry, You haven't added any services</h1>
                        <Link to='/add_service' className="btn btn-info">Add Services</Link>
                    </div>
                    :
                    <div className="p-3 md:p-10">
                        <h1 className="text-3xl font-bold text-center underline py-10">Manage Services: {services.length}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                services.map(service => {

                                    return <div key={service._id} className="flex flex-col justify-between gap-3 shadow-md border-2 rounded-lg p-5">
                                        <img
                                            className="rounded-lg h-60"
                                            src={service?.image} alt={service?.title} />
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-2xl font-bold text-pink-500">{service?.title}</h2>
                                            <h2 className="border-2 rounded-full px-2 border-gray-200"><span className="font-bold"></span >${service?.price}/month</h2>
                                        </div>
                                        <h2 ><span className="font-bold">Service Area: </span >{service?.service_area}</h2>
                                        <h2 className="text-justify"><span className="font-bold">Description: </span >{service?.description}</h2>

                                        <div className="flex justify-between items-center">
                                            <Link to={`/update_service/${service?._id}`} className="btn btn-info">Edit Service</Link>
                                            <button onClick={() => handleDeleteService(service._id)} className="btn btn-error">Delete</button>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

            }
        </div>
    );
};

export default ManageServices;