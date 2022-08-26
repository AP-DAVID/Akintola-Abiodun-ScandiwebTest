import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoryReducer } from './categorySlice';
import { categoriesReducer } from "./categoriesSlice";
import { currenciesReducer } from "./currencies";
import { productReducer } from "./productSlice";
import { cartreducer } from "./cart";


const persistConfig = {
  key: "root",
  whitelist: ["currencies", "cart"],
  storage,
};

const reducers = combineReducers({
  category: categoryReducer,
  product: productReducer,
  cart: cartreducer,
  categories: categoriesReducer,
  currencies: currenciesReducer,
});

const reducerPersist = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: reducerPersist,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
