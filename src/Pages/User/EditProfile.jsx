import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { BsPersonCircle } from "react-icons/bs";
import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function EditProfile() {
    const dispatch = useDispatch();
    const naviagte = useNavigate();

    const [data, setData] = useState({
        previewImage: "",
        fullName: "",
        avatar: undefined,
        userId: useSelector((state) => state?.auth?.data?._id)
    });

    function handleImageUpload(event) {
        event.preventDefault();

        const uploadedImage = event.target.files[0];

        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                // consolevent.log(this.result);
                setData({
                    ...data,
                    previewImage: this.result,
                    avatar: uploadedImage
                });
            })
        }


    }

    function handleUserInput(event) {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        })
    }

    async function onFormSubmit(event) {
        console.log(data);
        event.preventDefault();

        // if (!data.fullName || !data.avatar) {
        //     toast.error("All fields are mandatory");
        //     return;
        // }
        if (data.fullName.length < 5) {
            toast.error("Name can not be of less than 5 characters");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("avatar", data.avatar);
        console.log(data)
        //create account action
        await dispatch(updateProfile({ id: data.userId, data: formData }));
        // console.log(response);
        await dispatch(getUserData());

        naviagte("/user/profile");

    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-screen">
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-104 shadow-[0_0_10px_black]"
                    action="">
                    <h1 className="text-center text-2xl font-semibold">
                        Edit profile
                    </h1>
                    <label
                        className="cursor-pointer"
                        htmlFor="image_uploads">
                        {data.previewImage ? (
                            <img className="w-28 h-28 rounded-full m-auto"
                                src={data.previewImage} alt="" />
                        ) : (
                            <BsPersonCircle className="w-28 h-28 rounded-full m-auto" />
                        )}
                    </label>
                    <input
                        onChange={handleImageUpload}
                        className="hidden"
                        type="file"
                        id="image_uploads"
                        name="image_uploads"
                        accept=".jpg, .png, .jpeg, .svg"
                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="text-lg font-semibold">Full Name
                            <input type="text"
                                required
                                name="fullName"
                                id="fullName"
                                placeholder="Enter your full name"
                                className="bg-transparent px-2 py-1 border w-full"
                                onChange={handleUserInput}
                                value={data.fullName} />
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 px-2 cursor-pointer text-center">
                        Update profile
                    </button>
                    <Link to='/user/profile'>
                        <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
                            <AiOutlineArrowLeft /> Go back to profile
                        </p>
                    </Link>

                </form>
            </div>
        </HomeLayout>
    )
}