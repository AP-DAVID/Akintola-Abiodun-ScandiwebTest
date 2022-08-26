import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { connect } from '../graphql/connect';
import {getCurrencies } from '../graphql/getCurrencies';

const initialState = {
  loading: false,
  selectedCurrency: "$",
  currencies: [],
  error: "",
};

export const getListCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  () => {
    return connect.request(getCurrencies).then((response) => response);
  }
);

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    selectCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListCurrencies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListCurrencies.fulfilled, (state, action) => {
      state.loading = false;
      state.currencies = action.payload.currencies;
      state.selectedCurrency = state.selectedCurrency
        ? state.selectedCurrency
        : action.payload.currencies[0];
      state.error = '';
    });
    builder.addCase(getListCurrencies.rejected, (state, action) => {
      state.loading = false;
      state.currencies = [];
      state.error = action.error.message;
    });
  },
});

export const { selectCurrency } = currenciesSlice.actions;

export const currenciesReducer = currenciesSlice.reducer;
