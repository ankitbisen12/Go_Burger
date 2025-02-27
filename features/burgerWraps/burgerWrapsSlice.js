import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllBurgerWraps,
  fetchBurgerWrapsById,
  createBurgerWraps,
  updateBurgerWraps,
} from "./burgerWrapsAPI";

const initialState = {
  burgerWraps: [],
  status: "idle",
  selectedBurgerWraps: null,
};

export const fetchAllBurgerWrapssAsync = createAsyncThunk(
  "burgerWraps/fetchAllBurgerWraps",
  async () => {
    const response = await fetchAllBurgerWraps();
    return response.data;
  }
);

export const fetchBurgerWrapsByIdAsync = createAsyncThunk(
  "burgerWraps/fetchBurgerWrapsById",
  async (id) => {
    const response = await fetchBurgerWrapsById(id);
    return response.data;
  }
);

export const createBurgerWrapsAsync = createAsyncThunk(
  "burgerWraps/createBurgerWraps",
  async (burgerWraps) => {
    const response = await createBurgerWraps(burgerWraps);

    return response.data;
  }
);

export const updateBurgerWrapsAsync = createAsyncThunk(
  "burgerWraps/updateBurgerWraps",
  async (burgerWraps) => {
    const response = await updateBurgerWraps(burgerWraps);

    return response.data;
  }
);

export const burgerSlice = createSlice({
  name: "burgerWraps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBurgerWrapssAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBurgerWrapssAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.burgerWraps = action.payload.burgerWraps;
      })
      .addCase(fetchBurgerWrapsByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBurgerWrapsByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedBurgerWraps = action.payload;
      })
      .addCase(createBurgerWrapsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBurgerWrapsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.burgerWraps.push(action.payload);
      })
      .addCase(updateBurgerWrapsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBurgerWrapsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.burgerWraps.findIndex(
          (el) => el.id === action.payload.id
        );
        state.burgerWraps[index] = action.payload;
      });
  },
});

export const selectBurgerWraps = (state) => state.burgerWraps.burgerWraps;
export const selectedBurgerWraps = (state) =>
  state.burgerWraps.selectBurgerWraps;
export const selectStatus = (state) => state.burgerWraps.status;

export default burgerSlice.reducer;
