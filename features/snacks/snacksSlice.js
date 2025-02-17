import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllSnacks,
  fetchSnacksById,
  createSnacks,
  updateSnacks,
} from "./snacksAPI";

const initialState = {
  snacks: [],
  status: "idle",
  selectedSnack: null,
};

export const fetchAllSnacksAsync = createAsyncThunk(
  "snack/fetchAllSnack",
  async () => {
    const response = await fetchAllSnacks();
    return response.data;
  }
);

export const fetchSnackByIdAsync = createAsyncThunk(
  "snack/fetchSnackById",
  async (id) => {
    const response = await fetchSnacksById(id);
    return response.data;
  }
);

export const createSnackAsync = createAsyncThunk(
  "snack/createSnack",
  async (snack) => {
    const response = await createSnacks(snack);

    return response.data;
  }
);

export const updateSnackAsync = createAsyncThunk(
  "snack/updateSnack",
  async (snack) => {
    const response = await updateSnacks(snack);

    return response.data;
  }
);

export const snackSlice = createSlice({
  name: "snack",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSnacksAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllSnacksAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.snacks = action.payload;
      })
      .addCase(fetchSnackByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSnackByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedSnack = action.payload;
      })
      .addCase(createSnackAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createSnackAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.snacks.push(action.payload);
      })
      .addCase(updateSnackAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSnackAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.snacks.findIndex(
          (el) => el.id === action.payload.id
        );
        state.snacks[index] = action.payload;
      });
  },
});

export const selectSnacks = (state) => state.snack.snacks;
export const selectedSnack = (state) => state.snack.selectSnack;
export const selectStatus = (state) => state.snack.status;

export default snackSlice.reducer;
