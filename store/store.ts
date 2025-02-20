import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import menuReducer from "../features/menu/menuSlice";
import userReducer from "../features/user/userSlice";
import burgerMealReducer from "../features/burgerMeal/burgerMealSlice";
import selectedMenuReducer from "../features/selectedMenu/selectedMenu";
import snacksReducer from "../features/snacks/snacksSlice";
import dessertReducer from "../features/desserts/dessertSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    user: userReducer,
    burgerMeal: burgerMealReducer,
    selectedMenu: selectedMenuReducer,
    snacks: snacksReducer,
    dessert:dessertReducer
  },
});

// ✅ Infer RootState and AppDispatch from store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
