import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addJobs, deleteJobs, editJobs, getJobs } from "./jobsAPI";

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},
    searchText: '',
    sortBy:''
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (search) => {
    const jobs = await getJobs(search);
    return jobs;
})
export const createJobs = createAsyncThunk('jobs/createJobs', async (data) => {
    const jobs = await addJobs(data);
    return jobs;
})
export const changeJobs = createAsyncThunk('jobs/changeJobs', async ({ id, data }) => {
    const jobs = await editJobs(id, data);
    return jobs;
})
export const removeJob = createAsyncThunk('jobs/removeJob', async (id) => {
    const jobs = await deleteJobs(id);
    return jobs;
})

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInActive: (state) => {
            state.editing = {};
        },
        searched: (state, action) => {
            state.searchText = action.payload;
        },
        sorted: (state, action) => {
            state.sortBy = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.isError = false;
                state.isLoading = true

            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.jobs = []
            })


            .addCase(createJobs.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(createJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs.push(action.payload)
            })
            .addCase(createJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })


            .addCase(changeJobs.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(changeJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                const indexToUpdate = state.jobs.findIndex(
                    (t) => t.id === action.payload.id
                )
                state.jobs[indexToUpdate] = action.payload
            })
            .addCase(changeJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })


            .addCase(removeJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg)

            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })

    }
})

export default jobsSlice.reducer;
export const { editActive,editInActive, searched,sorted } = jobsSlice.actions;