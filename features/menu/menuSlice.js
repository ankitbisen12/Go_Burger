import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllMenu, fetchMenuById, createMenu, updateMenu } from "./menuAPI";

const initialState = {
  menus: [],
  status: "idle",
  selectedMenu: null,
};

export const fetchAllMenusAsync = createAsyncThunk(
  "menu/fetchAllMenu",
  async () => {
    const response = await fetchAllMenu();
    return response.data;
  }
);

export const fetchMenuByIdAsync = createAsyncThunk(
  "menu/fetchMenuById",
  async (id) => {
    const response = await fetchMenuById(id);
    return response.data;
  }
);

export const createMenuAsync = createAsyncThunk(
  "menu/createMenu",
  async (menu) => {
    const response = await createMenu(menu);

    return response.data;
  }
);

export const updateMenuAsync = createAsyncThunk(
  "menu/updateMenu",
  async (menu) => {
    const response = await updateMenu(menu);

    return response.data;
  }
);

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMenusAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllMenusAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.menus = action.payload.menu;
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

export const selectMenu = (state) => state.menu.menus;
export const selectedMenu = (state) => state.menu.selectMenu;
export const selectStatus = (state) => state.menu.status;

export default menuSlice.reducer;
