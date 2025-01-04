import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Purchase = () => {
    // Dynamically change the title of the page
    useEffect(() => {
        document.title = 'Purchase Service';
    }, [])

    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const [serviceDate, setServiceDate] = useState('');

    console.log(service)
    const notifySuccess = () => {
        toast.success("Purchased Successfully", {
            position: "top-center"
        })

    }
    const notifyError = () => {
        toast.error("Failed to purchase", {
            position: "top-center"
        })

    }

    // purchase service function
    const handlePurchase = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const purchasedService = { serviceStatus: 'pending', ...data }

        console.log(purchasedService)
        axios.post('https://learn-plus-server.vercel.app/purchased_services', purchasedService)
            .then(res => {
                if (res.data.insertedId) {
                    notifySuccess()
                }
            })
            .catch(err => {
                notifyError()
            })
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold my-6 text-center">Service Booking Form</h1>
            <form onSubmit={handlePurchase} className="grid grid-cols-1 gap-10 md:grid-cols-2 bg-white p-8 rounded-lg shadow-lg w-full">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input
                        type="text"
                        name="service_name"
                        className="input input-bordered w-full"
                        value={service.title}
                        readOnly
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service ID</span>
                    </label>
                    <input
                        type="text"
                        name="service_id"
                        className="input input-bordered w-full"
                        value={service._id}
                        readOnly
                    />
                </div>




                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Provider Name</span>
                    </label>
                    <input
                        type="text"
                        name="provider_name"
                        className="input input-bordered w-full"
                        value={service.provider_name}
                        readOnly
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Provider Email</span>
                    </label>
                    <input
                        type="email"
                        name="provider_email"
                        className="input input-bordered w-full"
                        value={service.provider_email}
                        readOnly
                    />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Current User Name</span>
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        className="input input-bordered w-full"
                        value={user.displayName}
                        readOnly
                    />
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Current User Email</span>
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        className="input input-bordered w-full"
                        value={user.email}
                        readOnly
                    />
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Image</span>
                    </label>
                    <input
                        type="text"
                        name="service_image"
                        className="input input-bordered w-full"
                        value={service.image}
                        readOnly
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price ($)/month</span>
                    </label>
                    <input
                        type="text"
                        name="price"
                        className="input input-bordered w-full"
                        value={service.price}
                        readOnly
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-pink-500">Service Taking Date</span>
                    </label>
                    <input
                        type="date"
                        name="service_date"
                        className="input input-bordered w-full"
                        value={serviceDate}
                        onChange={(e) => setServiceDate(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-pink-500">Special Instructions</span>
                    </label>
                    <textarea
                        name="special_instructions"
                        className="textarea textarea-bordered w-full"
                        placeholder="Add any special instructions here..."
                    ></textarea>
                </div>




                <div className="form-control col-span-2">
                    <button className="btn btn-primary w-full">Purchase Now</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    )
};

export default Purchase;