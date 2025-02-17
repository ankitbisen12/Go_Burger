import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllDessert,
  fetchDessertById,
  createDessert,
  updateDessert,
} from "./dessertAPI";

const initialState = {
  desserts: [],
  status: "idle",
  selectedDessert: null,
};

export const fetchAllDessertsAsync = createAsyncThunk(
  "dessert/fetchAllDessert",
  async () => {
    const response = await fetchAllDessert();
    return response.data;
  }
);

export const fetchDessertByIdAsync = createAsyncThunk(
  "dessert/fetchDessertById",
  async (id) => {
    const response = await fetchDessertById(id);
    return response.data;
  }
);

export const createDessertAsync = createAsyncThunk(
  "dessert/createDessert",
  async (dessert) => {
    const response = await createDessert(dessert);

    return response.data;
  }
);

export const updateDessertAsync = createAsyncThunk(
  "dessert/updateDessert",
  async (dessert) => {
    const response = await updateDessert(dessert);

    return response.data;
  }
);

export const dessertSlice = createSlice({
  name: "dessert",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDessertsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllDessertsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.desserts = action.payload;
      })
      .addCase(fetchDessertByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDessertByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedDessert = action.payload;
      })
      .addCase(createDessertAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createDessertAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.desserts.push(action.payload);
      })
      .addCase(updateDessertAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateDessertAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.desserts.findIndex(
          (el) => el.id === action.payload.id
        );
        state.desserts[index] = action.payload;
      });
  },
});

export const selectDessert = (state) => state.dessert.desserts;
export const selectedDessert = (state) => state.dessert.selectDessert;
export const selectStatus = (state) => state.dessert.status;

export default dessertSlice.reducer;
