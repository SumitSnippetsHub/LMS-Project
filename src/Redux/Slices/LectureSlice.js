import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initailState = {
    lectures: []
}

export const getCourseLectures = createAsyncThunk("/course/lecture/get", async (id) => {
    try {
        const response = axiosInstance.get(`/course/${id}`);
        toast.promise(response, {
            loading: "Fetching course lectures",
            success: "Lectures fetched successfully",
            error: "Failed to load the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

export const addCourseLecture = createAsyncThunk("/course/lecture/add", async (id) => {
    try {
        const formData = new FormData();
        formData.append("lectures", data.lecture);
        formData.append("title", data.title);
        formData.append("description", data.description);

        const response = axiosInstance.post(`/course/${data.id}`, formData);
        toast.promise(response, {
            loading: "Adding course lectures",
            success: "Lectures added successfully",
            error: "Failed to add the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

export const deleteCourseLecture = createAsyncThunk("/course/lecture/delete", async (data) => {
    try {
        const response = axiosInstance.delete(`/courses?courseId=${data.id}&lectureId=${data.lectureId}`);
        toast.promise(response, {
            loading: "Deleting course lectures",
            success: "Lectures deleted successfully",
            error: "Failed to delete the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

const lectureSlice = createSlice({
    name: "lectures",
    initialState: initailState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCourseLectures.fulfilled, (state, action) => {
                state.lectures = action?.payload?.lectures;
            })
            .addCase(addCourseLecture.fulfilled, (state, action) => {
                state.lectures = action?.payload?.course?.lectures;
            })
    }
});

export default lectureSlice.reducer;
