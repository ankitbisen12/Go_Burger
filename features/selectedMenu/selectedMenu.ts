import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedMenuState {
  selectMenu: string | null;
}

const initialState: SelectedMenuState = {
  selectMenu: "Burger Meal", // Initially, no menu is selected
};

const selectedMenuSlice = createSlice({
  name: "selectedMenu",
  initialState,
  reducers: {
    setSelectedMenu: (state, action: PayloadAction<string>) => {
      state.selectMenu = action.payload;
    },
  },
});

export const { setSelectedMenu } = selectedMenuSlice.actions;
export const selectedMenuu = (state: SelectedMenuState) => state.selectMenu;
export default selectedMenuSlice.reducer;
