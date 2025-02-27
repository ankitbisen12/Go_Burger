import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

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
export const selectedMenuu = (state: RootState) => state.selectedMenu.selectMenu;
export default selectedMenuSlice.reducer;
