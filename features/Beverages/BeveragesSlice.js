import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createBeverage,
  fetchAllBeverages,
  fetchBeverageById,
  updateBeverage,
} from "./BeveragesAPI";

const initialState = {
  beverages: [],
  status: "idle",
  selectedBeverage: null,
};

export const fetchAllBeveragesAsync = createAsyncThunk(
  "beverage/fetchAllBeverages",
  async () => {
    const response = await fetchAllBeverages();
    return response.data;
  }
);

export const fetchBeverageByIdAsync = createAsyncThunk(
  "beverage/fetchBeverageById",
  async (id) => {
    const response = await fetchBeverageById(id);
    return response.data;
  }
);

export const createBeverageAsync = createAsyncThunk(
  "beverage/createBeverage",
  async (beverage) => {
    const response = await createBeverage(beverage);

    return response.data;
  }
);

export const updateBeverageAsync = createAsyncThunk(
  "beverage/updateBeverage",
  async (beverage) => {
    const response = await updateBeverage(beverage);

    return response.data;
  }
);

export const beverageSlice = createSlice({
  name: "beverage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBeveragesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBeveragesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.beverages = action.payload;
      })
      .addCase(fetchBeverageByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBeverageByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedBeverage = action.payload;
      })
      .addCase(createBeverageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBeverageAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.beverages.push(action.payload);
      })
      .addCase(updateBeverageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBeverageAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.beverages.findIndex(
          (el) => el.id === action.payload.id
        );
        state.beverages[index] = action.payload;
      });
  },
});

export const selectBeverages = (state) => state.beverage.beverages;
export const selectedBeverage = (state) => state.beverage.selectBeverage;
export const selectStatus = (state) => state.beverage.status;

export default beverageSlice.reducer;
