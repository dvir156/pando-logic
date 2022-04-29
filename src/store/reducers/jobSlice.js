import { getMethod } from "../../utils/axiosClient";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getJobs = createAsyncThunk("jobs/get", async () => {
  const data = await getMethod("/jobs").catch((err) => err.response.data);
  return data.data;
});

const initialState = {
  jobs: [],
  status: "idle",
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,

  reducers: {},
  extraReducers: {
    [getJobs.pending]: (state, action) => {
      state.loading = true;
      state.status = "loading";
    },
    [getJobs.rejected]: (state, action) => {
      state.loading = false;
      state.status = "failed";
      state.error = action.error.message;
    },
    [getJobs.fulfilled]: (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
      state.status = "succeeded";
    },
  },
});

export const {} = jobSlice.actions;

export default jobSlice;
