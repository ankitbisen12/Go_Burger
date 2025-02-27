import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllMeal, fetchMealById, createMeal, updateMeal } from "./mealAPI";

const initialState = {
  meals: [],
  status: "idle",
  selectedMeal: null,
};

export const fetchAllMealsAsync = createAsyncThunk(
  "meal/fetchAllMeal",
  async () => {
    const response = await fetchAllMeal();
    return response.data;
  }
);

export const fetchMealByIdAsync = createAsyncThunk(
  "meal/fetchMealById",
  async (id) => {
    const response = await fetchMealById(id);
    return response.data;
  }
);

export const createMealAsync = createAsyncThunk(
  "meal/createMeal",
  async (meal) => {
    const response = await createMeal(meal);

    return response.data;
  }
);

export const updateMealAsync = createAsyncThunk(
  "meal/updateMeal",
  async (meal) => {
    const response = await updateMeal(meal);

    return response.data;
  }
);

export const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMealsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllMealsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.meals = action.payload.meals;
      })
      .addCase(fetchMealByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMealByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedMeal = action.payload;
      })
      .addCase(createMealAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createMealAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.meals.push(action.payload);
      })
      .addCase(updateMealAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateMealAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.meals.findIndex(
          (el) => el.id === action.payload.id
        );
        state.meals[index] = action.payload;
      });
  },
});

export const selectMeals = (state) => state.meal.meals;
export const selectedMeal = (state) => state.meal.selectMeal;
export const selectStatus = (state) => state.meal.status;

export default mealSlice.reducer;
