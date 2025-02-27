import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllFAQSupport,
  createFAQSupport,
  updateFAQ,
} from "./FAQSupportAPI";

const initialState = {
  faqSupport: [],
  status: "idle",
};

export const fetchAllFAQSupportAsync = createAsyncThunk(
  "faqSupport/fetchAllFAQSupport",
  async () => {
    const response = await fetchAllFAQSupport();
    return response.data;
  }
);

export const createFAQSupportAsync = createAsyncThunk(
  "faqSupport/createFAQSupport",
  async (faq) => {
    const response = await createFAQSupport(faq);
    return response.data;
  }
);

export const updateFAQAsync = createAsyncThunk(
  "faqSupport/updateFAQ",
  async (faq) => {
    const response = await updateFAQ(faq);

    return response.data;
  }
);

export const FAQSupportSlice = createSlice({
  name: "FaqSupport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFAQSupportAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllFAQSupportAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.faqSupport = action.payload.faqSupport;
      })
      .addCase(createFAQSupportAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createFAQSupportAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.faqSupport.push(action.payload);
      })
      .addCase(updateFAQAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateFAQAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.faqSupport.findIndex(
          (el) => el.id === action.payload.id
        );
        state.faqSupport[index] = action.payload;
      });
  },
});

export const selectFAQ = (state) => state.FaqSupport.faqSupport;
export const selectStatus = (state) => state.FaqSupport.status;

export default FAQSupportSlice.reducer;
