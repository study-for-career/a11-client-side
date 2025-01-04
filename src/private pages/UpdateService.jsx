import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from "react-router-dom";
import axios from "axios";


// Update a Service
const UpdateService = () => {

    // Dynamically change the title of the page
    useEffect(() => {
        document.title = 'Update Service';
    }, [])

    const { user } = useContext(AuthContext)
    const { email } = user;

    const serviceData = useLoaderData()
    const { _id, title, service_area, price, image, description } = serviceData;


    const notifySuccess = () => {
        toast.success("Service Updated Successfully", {
            position: "top-center"
        })
    }
    const notifyError = () => {
        toast.error("Failed to Update", {
            position: "top-center"
        })
    }

    // Update service functionallity
    const handleUpdateService = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        axios.put(`https://learn-plus-server.vercel.app/update_service/${_id}`, data)
            .then(res => {
                if (res.data.modifiedCount) {
                    notifySuccess()
                    form.reset()
                } else {
                    notifyError()
                }
            })
    }


    return (
        <div className="py-10 px-2 md:px-16">

            <div>
                <div className="text-center">
                    <h1 className="text-3xl text-pink-500">Update Your Service ...</h1>
                </div>
                <form onSubmit={handleUpdateService} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>

                        <input type="text" name="title" defaultValue={title} placeholder="Service Name" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>

                        <input type="text" name="service_area" defaultValue={service_area} placeholder="Service Area" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price ($)/month</span>
                        </label>

                        <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>

                        <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>

                        <textarea className="textarea textarea-bordered h-24" name="description" defaultValue={description} placeholder="Full description of your service"></textarea>
                    </div>

                    <div className="form-control mt-6 md:col-span-2">
                        <button className="btn bg-pink-500 hover:bg-pink-500 hover:text-black text-white uppercase">Update Service</button>
                    </div>
                </form>


            </div>


            <ToastContainer></ToastContainer>

        </div>
    );
};


export default UpdateService;