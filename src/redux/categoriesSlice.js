import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { connect} from "../graphql/connect";
import { getCategoriesName } from "../graphql/getCategories";

const initialState = {
  loading: false,
  categories: [],
  error: "",
};

export const getCategories = createAsyncThunk(
  "categories/fetchCategories",
  () => {
    return connect.request(getCategoriesName).then((response) => response);
  }
);

const slice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload.categories;
      state.error = "";
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.categories = [];
      state.error = action.error.message;
    });
  },
});

export const categoriesReducer = slice.reducer;
