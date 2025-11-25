import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast';

export default function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signupData, setSignupData] = useState({
        fullname: "",
        email: "",
        password: "",
        avatar: ""
    });

    // console.log(signupData);

    function handleUserInput(event) {
        const { name, value } = event.target;
        setSignupData({
            ...signupData, [name]: value
        })
    };

    function getImage(event) {
        event.preventDefault();

        const uploadedImage = event.target.files[0];

        if (uploadedImage) {
            setSignupData({
                ...signupData,
                avatar: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                // consolevent.log(this.result);
                setPreviewImage(this.result);
            })
        }


    }

    function createAccount(event) {
        event.preventDefault();

        if (!signupData.email || !signupData.avatar || !signupData.fullname || !signupData.password) {
            toast.error("Please fill all the details");
            return;
        }
        console.log("yess")

        // checking the name field length
        if (signupData.fullname.length < 3) {
            // console.log("end")
            // console.log(signupData.fullname.length);
            toast.error("Name should be atleast of 3 characters");
            return;
        }

        // checking email validation
        if (!signupData.email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ));
    }

    const [previewImage, setPreviewImage] = useState("");


    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-screen w-full">
                <form onSubmit={createAccount} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]" action="">
                    <h1 className="text-center text-2xl font-bold">
                        Registration page
                    </h1>
                    <label htmlFor="image-uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img src={previewImage} alt="" className="w-24 h-24 rounded-full m-auto" />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>

                    <input onChange={getImage} type="file" className="hidden" id="image-uploads" accept=".jpg, .jpeg, .png, .svg" />

                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullname" className="font-semibold">Name</label>
                        <input type="text"
                            // required
                            name="fullname"
                            id="fullname"
                            placeholder="Enter your name"
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={signupData.fullname}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input type="email"
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your email..."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={signupData.email}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input type="password"
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your password..."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={signupData.password}
                        />
                    </div>

                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all 
                    ease-in-out duration-300 rounded-sm py-2 font-semibold text-xl cursor-pointer mt-2">
                        Create account
                    </button>

                    <p className="text-center">
                        Already have an account ? <Link to="/login" className="link text-accent cursor-pointer">Login</Link>
                    </p>

                </form>
            </div>
        </HomeLayout>
    );
}