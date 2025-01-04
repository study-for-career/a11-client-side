import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const AddService = () => {
    useEffect(() => {
        document.title = 'Add Service';
    }, [])

    const { user } = useContext(AuthContext)
    const { email: provider_email, displayName: provider_name, photoURL: provider_image } = user;

    const notifySuccess = () => {
        toast.success("Service Added Successfully", {
            position: "top-center"
        })
    }
    const notifyError = () => {
        toast.error("Something went wrong", {
            position: "top-center"
        })
    }

    const handleAddService = e => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const serviceDetails = { provider_email, provider_name, provider_image, ...data }

        axios.post('https://learn-plus-server.vercel.app/services', serviceDetails)
            .then(res => {
                if (res.data.insertedId) {
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
                    <h1 className="text-3xl text-pink-500">Add Your Service Here...</h1>
                </div>
                <form onSubmit={handleAddService} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>

                        <input type="text" name="title" placeholder="Service Name" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>

                        <input type="text" name="service_area" placeholder="Service Area" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price ($)</span>
                        </label>

                        <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>

                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>

                        <textarea className="textarea textarea-bordered h-24" name="description" placeholder="Full description of your service"></textarea>
                    </div>

                    <div className="form-control mt-6 md:col-span-2">
                        <button className="btn bg-pink-500 hover:bg-pink-500 hover:text-black text-white uppercase">Add Service</button>
                    </div>
                </form>


            </div>


            <ToastContainer></ToastContainer>

        </div>
    );
}

export default AddService;