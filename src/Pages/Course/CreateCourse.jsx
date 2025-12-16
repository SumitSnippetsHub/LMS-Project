import { useState } from "react";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { createCourse } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layouts/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function CreateCourse() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: ""
    });

    function handleImageUpload(event) {
        event.preventDefault();

        const uploadedImage = event.target.files[0];

        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                // consolevent.log(this.result);
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadedImage
                });
            })
        }


    }

    function handleUserImput(event) {
        const { name, value } = event.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(event) {
        event.preventDefault();

        if (!userInput.title || !userInput.category || !userInput.createdBy || !userInput.description || !userInput.thumbnail) {
            toast.error("All fields are mandatory");
            return;
        }

        //create account action
        const response = await dispatch(createCourse(userInput)); c
        // console.log(response);
        if (response?.payload?.success)
            navigate("/courses");

    }


    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-screen">
                <form onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative">

                    <Link className="absolute top-5 text-2xl link text-accent cursor-pointer">
                        <AiOutlineArrowLeft />
                    </Link>

                    <h1 className="text-center text-2xl font-bold">
                        Create New Course
                    </h1>

                    <main className="grid grid-cols-2 gap-x-10 ">
                        <div className="gap-y-6">
                            <div>
                                <label htmlFor="image_uploads" className="cursor-pointer">
                                    {userInput.previewImage ? (
                                        <img src={userInput.previewImage} alt=""
                                            className="w-full h-44 m-auto border"
                                        />
                                    ) : (
                                        <div className="w-full h-44 m-auto flex items-center justify-center border">
                                            <h1 className="font-bold text-lg">
                                                Upload your course thumbnail
                                            </h1>
                                        </div>
                                    )}

                                </label>
                                <input className="hidden"
                                    type="file"
                                    id="image_uploads"
                                    accept=".jpg, .jpeg, .png"
                                    name="image_uploads"
                                    onChange={handleImageUpload}
                                />

                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="title">
                                    Course title
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Enter course title"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.title}
                                    onChange={handleUserImput}
                                />
                            </div>

                        </div>

                        <div className="flex flex-col gap-1 ">
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="createdBy">
                                    Course Instructor
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="createdBy"
                                    name="createdBy"
                                    placeholder="Enter course instructor"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.createdBy}
                                    onChange={handleUserImput}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="category">
                                    Course Category
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="category"
                                    name="category"
                                    placeholder="Enter course category"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.category}
                                    onChange={handleUserImput}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="description">
                                    Course Description
                                </label>
                                <textarea
                                    required
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="Enter course description"
                                    className="bg-transparent px-2 py-1 h-24 resize-none border"
                                    value={userInput.description}
                                    onChange={handleUserImput}
                                />
                            </div>
                        </div>
                    </main>

                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 py-2 rounded-sm font-semibold text-lg cursor-pointer">
                        Create course
                    </button>

                </form>
            </div>
        </HomeLayout>
    )
}