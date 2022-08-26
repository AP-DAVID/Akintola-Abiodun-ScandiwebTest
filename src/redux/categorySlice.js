import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { connect } from "../graphql/connect";
import { getACategory } from "../graphql/getACategory";

const initialState = {
  category: {},
  loading: false,
  error: "",
};

export const getCategory = createAsyncThunk(
  "category/fetchCategory",
  (name) => {
    return connect
      .request(getACategory, {title : name })
      .then((response) => response);
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.category = {};
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category = action.payload.category;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.category = {};
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const categoryReducer = categorySlice.reducer;
