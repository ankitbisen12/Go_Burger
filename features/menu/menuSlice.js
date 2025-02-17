import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllMenu, fetchMenuById, createMenu, updateMenu } from "./mealAPI";

const initialState = {
  menus: [],
  status: "idle",
  selectedMenu: null,
};

export const fetchAllMenusAsync = createAsyncThunk(
  "meal/fetchAllMenu",
  async () => {
    const response = await fetchAllMenu();
    return response.data;
  }
);

export const fetchMenuByIdAsync = createAsyncThunk(
  "meal/fetchMenuById",
  async (id) => {
    const response = await fetchMenuById(id);
    return response.data;
  }
);

export const createMenuAsync = createAsyncThunk(
  "meal/createMenu",
  async (meal) => {
    const response = await createMenu(meal);

    return response.data;
  }
);

export const updateMenuAsync = createAsyncThunk(
  "meal/updateMenu",
  async (meal) => {
    const response = await updateMenu(meal);

    return response.data;
  }
);

export const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMenusAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllMenusAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.menus = action.payload;
      })
      .addCase(fetchMenuByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenuByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedMenu = action.payload;
      })
      .addCase(createMenuAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createMenuAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.menus.push(action.payload);
      })
      .addCase(updateMenuAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateMenuAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.menus.findIndex(
          (el) => el.id === action.payload.id
        );
        state.menus[index] = action.payload;
      });
  },
});

export const selectMenu = (state) => state.meal.menus;
export const selectedMenu = (state) => state.meal.selectMenu;
export const selectStatus = (state) => state.meal.status;

export default mealSlice.reducer;
