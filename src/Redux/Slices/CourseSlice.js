import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

//created state
const initialState = {
    courseData: []
}

export const getAllCourses = createAsyncThunk('/course/get', async () => {
    try {
        const response = axiosInstance.get('/courses');
        toast.promise(response, {
            loading: "Loading course data...",
            success: "Courses loaded successfully",
            error: "Failed to get the courses",
        });
        return (await response).data.courses;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

//created slice
const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export default courseSlice.reducer;
