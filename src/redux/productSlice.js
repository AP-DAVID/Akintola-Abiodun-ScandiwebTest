import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { connect } from "../graphql/connect";
import { getAProduct } from "../graphql/getAProduct";

const initialState = {
  loading: false,
  product: {},
  error: "",
};

export const getProduct = createAsyncThunk("product/fetchproduct", (id) => {
  return connect.request(getAProduct, { id }).then((response) => response);
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProduct: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
      state.product = [];
      state.error = "";
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload.product;
      state.error = "";
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
  },
});

export const { resetProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;
