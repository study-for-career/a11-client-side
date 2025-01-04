import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const ServiceToDo = () => {

    // Dynamically change the title of the page
    useEffect(() => {
        document.title = 'Service To Do';
    }, [])

    const { user } = useContext(AuthContext);

    const [purchased, setPurchased] = useState([])

    useEffect(() => {
        axios.get(`https://learn-plus-server.vercel.app/service_todo/${user.email}`)
            .then(res => setPurchased(res.data))
    }, []);

    const [serviceStatus, setServiceStatus] = useState('')

    const handleSurviceStatus = (e) => {
        e.preventDefault()
        const newStatus = e.target.value
        setServiceStatus(newStatus)
    }

    const handleStatusUpdate = (id) => {

        console.log(serviceStatus)
        console.log(id)

        axios.put(`https://learn-plus-server.vercel.app/service_todo/${id}`, { serviceStatus })
    }

    return (
        <div>
            {
                purchased.length < 1 ?
                    <div className="py-16 flex flex-col items-center gap-5 max-h-screen">
                        <h1 className="text-center text-2xl">Sorry, No one purchased any of your services</h1>
                        <Link to='/services' className="btn btn-info">Add a New Service</Link>
                    </div>
                    :
                    <div className="py-12">
                        <h1 className="text-3xl text-pink-500 uppercase py-10 text-center">Service To Do</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                purchased.map(purchasedSurvice => {

                                    return <div key={purchasedSurvice._id} className="flex flex-col justify-between gap-3 shadow-md border-2 rounded-lg p-5">
                                        <img
                                            className="rounded-lg h-60"
                                            src={purchasedSurvice?.service_image} alt={purchasedSurvice?.title} />
                                        <div className="flex justify-between">
                                            <h2 className="text-2xl font-bold text-pink-500">{purchasedSurvice?.service_name}</h2>

                                            <form onChange={(e) => { handleSurviceStatus(e); handleStatusUpdate(purchasedSurvice._id) }}>
                                                <select className="border-2 rounded-full px-2 border-pink-200">
                                                    <option defaultValue={purchasedSurvice?.serviceStatus}>{purchasedSurvice?.serviceStatus}</option>
                                                    <option value="pending">pending</option>
                                                    <option value="working">working</option>
                                                    <option value="completed">completed</option>
                                                </select>
                                            </form>

                                            {/* <h2 className="border-2 rounded-full px-2 border-pink-200"><span className="font-bold"></span >{purchasedSurvice?.serviceStatus}</h2> */}
                                        </div>

                                        <h2 ><span className="font-bold">Service Purchase Date: </span >{purchasedSurvice?.service_date}</h2>
                                        <h2 ><span className="font-bold">Provider: </span >{purchasedSurvice?.provider_name}</h2>

                                    </div>
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default ServiceToDo;