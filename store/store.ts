import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  menuReducer,
  userReducer,
  burgerMealReducer,
  burgerReducer,
  burgerWrapsReducer,
  selectedMenuReducer,
  snacksReducer,
  dessertReducer,
  orderReducer,
  cartReducer,
  mealReducer,
  beveragesReducer,
  faqSupportReducer,
} from "@/utils/reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    user: userReducer,
    burgerMeal: burgerMealReducer,
    selectedMenu: selectedMenuReducer,
    snack: snacksReducer,
    dessert: dessertReducer,
    burger: burgerReducer,
    order: orderReducer,
    cart: cartReducer,
    meal: mealReducer,
    beverage: beveragesReducer,
    burgerWraps: burgerWrapsReducer,
    FaqSupport: faqSupportReducer,
  },
});

// ✅ Infer RootState and AppDispatch from store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
