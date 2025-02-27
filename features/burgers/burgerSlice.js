import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllBurger,
  fetchBurgerById,
  createBurger,
  updateBurger,
} from "./burgerAPI";

const initialState = {
  burgers: [],
  status: "idle",
  selectedBurger: null,
};

export const fetchAllBurgerAsync = createAsyncThunk(
  "burger/fetchAllBurger",
  async () => {
    const response = await fetchAllBurger();
    return response.data;
  }
);

export const fetchBurgerByIdAsync = createAsyncThunk(
  "burger/fetchBurgerById",
  async (id) => {
    const response = await fetchBurgerById(id);
    return response.data;
  }
);

export const createBurgerAsync = createAsyncThunk(
  "burger/createBurger",
  async (burger) => {
    const response = await createBurger(burger);

    return response.data;
  }
);

export const updateBurgerAsync = createAsyncThunk(
  "burger/updateBurger",
  async (burger) => {
    const response = await updateBurger(burger);

    return response.data;
  }
);

export const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBurgerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBurgerAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.burgers = action.payload.burgers;
      })
      .addCase(fetchBurgerByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBurgerByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedBurger = action.payload;
      })
      .addCase(createBurgerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBurgerAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.burgers.push(action.payload);
      })
      .addCase(updateBurgerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBurgerAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.burgers.findIndex(
          (el) => el.id === action.payload.id
        );
        state.burgers[index] = action.payload;
      });
  },
});

export const selectBurger = (state) => state.burger.burgers;
export const selectedBurger = (state) => state.burger.selectBurger;
export const selectStatus = (state) => state.burger.status;

export default burgerSlice.reducer;
