import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllBurgerMeal,
  fetchBurgerMealById,
  createBurgerMeal,
  updateBurgerMeal,
} from "./burgerMealAPI";

const initialState = {
  burgerMeals: [],
  status: "idle",
  selectedBurgerMeal: null,
};

export const fetchAllBurgerMealsAsync = createAsyncThunk(
  "burgerMeal/fetchAllBurgerMeal",
  async () => {
    const response = await fetchAllBurgerMeal();
    return response.data;
  }
);

export const fetchMealByIdAsync = createAsyncThunk(
  "burgerMeal/fetchBurgerMealById",
  async (id) => {
    const response = await fetchBurgerMealById(id);
    return response.data;
  }
);

export const createBurgerMealAsync = createAsyncThunk(
  "burgerMeal/createBurgerMeal",
  async (burgerMeal) => {
    const response = await createBurgerMeal(burgerMeal);

    return response.data;
  }
);

export const updateBurgerMealAsync = createAsyncThunk(
  "burgerMeal/updateBurgerMeal",
  async (burgerMeal) => {
    const response = await updateBurgerMeal(burgerMeal);

    return response.data;
  }
);

export const burgerMealSlice = createSlice({
  name: "burgerMeal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBurgerMealsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBurgerMealsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.burgerMeals = action.payload;
      })
      .addCase(fetchMealByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMealByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedMeal = action.payload;
      })
      .addCase(createBurgerMealAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBurgerMealAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.burgerMeals.push(action.payload);
      })
      .addCase(updateBurgerMealAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBurgerMealAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.burgerMeals.findIndex(
          (el) => el.id === action.payload.id
        );
        state.burgerMeals[index] = action.payload;
      });
  },
});

export const selectBurgerMeals = (state) => state.burgerMeal.burgerMeals;
export const selectedBurgerMeal = (state) =>
  state.burgerMeal.selectedBurgerMeal;
export const selectStatus = (state) => state.burgerMeal.status;

export default burgerMealSlice.reducer;
