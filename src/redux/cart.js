import { createSlice } from "@reduxjs/toolkit";
import objectCheck from "../util/objectCheck";

const initialState = {
  items: [],
  itemsQuantity: 0,
  totalPrice: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const getItem = state.items.find((data) =>
        data.id === action.payload.id &&
        (!data.selectedAttributes ||
          objectCheck(
            data.selectedAttributes,
            action.payload.selectedAttributes
          ))
          ? true
          : false
      );

      if (getItem) {
        state.items = state.items.map((data) =>
          data.id === action.payload.id &&
          (!data.selectedAttributes ||
            objectCheck(
              data.selectedAttributes,
              action.payload.selectedAttributes
            ))
            ? { ...data, quantity: data.quantity + action.payload.quantity }
            : data
        );
      } else {
        state.items.push(action.payload);
      }

      state.itemsQuantity = state.items.reduce(
        (previousValue, currentValue) => previousValue + currentValue.quantity,
        0
      );

      const gottenPrices = state.items
        .map((data) =>
          data.prices.map((price) => ({
            totalPrice: data.quantity * price.amount,
            label: price.currency.label,
          }))
        )
        .flat();

      const prices = {};
      gottenPrices.forEach((price) =>
        prices[price.label]
          ? (prices[price.label] += price.totalPrice)
          : (prices[price.label] = price.totalPrice)
      );

      state.totalPrice = prices;
    },
  
    // increase the quantity of the store
    increaseQuantity: (state, action) => {
      state.items = state.items.map((data) =>
        data.id === action.payload.id &&
        (!data.selectedAttributes ||
          objectCheck(
            data.selectedAttributes,
            action.payload.selectedAttributes
          ))
          ? { ...data, quantity: data.quantity + 1 }
          : data
      );

      state.itemsQuantity = state.items.reduce(
        (previousValue, currentValue) => previousValue + currentValue.quantity,
        0
      );

      const gottenPrices = state.items
        .map((data) =>
          data.prices.map((price) => ({
            totalPrice: data.quantity * price.amount,
            label: price.currency.label,
          }))
        )
        .flat();

      const prices = {};
      gottenPrices.forEach((price) =>
        prices[price.label]
          ? (prices[price.label] += price.totalPrice)
          : (prices[price.label] = price.totalPrice)
      );

      state.totalPrice = prices;
    },

    // decrease the quantity of the store
    decreaseQuantity: (state, action) => {
      state.items = state.items
        .map((data) => {
          if (
            data.id === action.payload.id &&
            (!data.selectedAttributes ||
              objectCheck(
                data.selectedAttributes,
                action.payload.selectedAttributes
              ))
          ) {
            return { ...data, quantity: data.quantity - 1 };
          } else {
            return data;
          }
        })
        .filter((data) => data.quantity > 0);

      state.itemsQuantity = state.items.reduce(
        (previousValue, currentValue) => previousValue + currentValue.quantity,
        0
      );

      const gottenPrices = state.items
        .map((data) =>
          data.prices.map((price) => ({
            totalPrice: data.quantity * price.amount,
            label: price.currency.label,
          }))
        )
        .flat();

      const prices = {};
      gottenPrices.forEach((price) =>
        prices[price.label]
          ? (prices[price.label] += price.totalPrice)
          : (prices[price.label] = price.totalPrice)
      );

      state.totalPrice = prices;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const cartreducer = cartSlice.reducer;
