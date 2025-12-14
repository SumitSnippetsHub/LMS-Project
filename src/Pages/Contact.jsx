import { useDispatch } from "react-redux";
import HomeLayout from "../Layouts/HomeLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../Helpers/axiosInstance";

export default function Contact() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // console.log(contactData);

    function handleUserInput(event) {
        const { name, value } = event.target;
        setContactData({
            ...contactData, [name]: value
        })
    }

    // console.log(contactData);

    async function createForm(event) {
        event.preventDefault();

        if (!contactData.name || !contactData.email || !contactData.message) {
            toast.error("Please fill all the details");
            return;
        }
        // console.log("yess")

        // checking the name field length
        if (contactData.name.length < 3) {
            // console.log("end")
            // console.log(contactData.fullName.length);
            toast.error("Name should be atleast of 3 characters");
            return;
        }

        // checking email validation
        if (!contactData.email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            toast.error("Invalid email id");
            return;
        };

        if (contactData.message.length < 10) {
            // console.log("end")
            // console.log(contactData.fullName.length);
            toast.error("message should be atleast of 10 characters");
            return;
        }

        try {
            const response = axiosInstance.post('/contact', contactData);
            toast.promise(response, {
                loading: "Submitting your message...",
                success: "Form submitted successfully",
                error: "Failed to submit the form"
            });
            const contactResponse = await response;
            if (contactResponse?.data?.success) {
                //reset the form to empty after completion
                setContactData({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (err) {
            toast.error("operation failed.....");
        }
        // return await navigate("/");
    }
    return (

        <HomeLayout>
            <div className="flex items-center justify-center h-screen">
                <form onSubmit={createForm}
                    className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-88"
                    noValidate>
                    <h1 className="text-3xl font-semibold">
                        Contact Form
                    </h1>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-lg font-semibold">Name</label>
                        <input className="bg-transparent border px-2 py-1 rounded-sm"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleUserInput}
                            value={contactData.name}//used for set empty the value afetr form submitting
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="text-lg font-semibold">Email</label>
                        <input className="bg-transparent border px-2 py-1 rounded-sm"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleUserInput}
                            value={contactData.email}//used for set empty the value afetr form submitting
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="mesaage" className="text-lg font-semibold">Message</label>
                        <textarea className="bg-transparent border px-2 py-1 rounded-sm resize-none"
                            id="message"
                            name="message"
                            placeholder="Enter your message here..."
                            onChange={handleUserInput}
                            value={contactData.message} //used for set empty the value afetr form submitting
                        />
                    </div>
                    <button type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">Submit </button>

                </form>
            </div>
        </HomeLayout>
    );
}