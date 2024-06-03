import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Rducx/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import rootReducer from './reducers'; // import your root reducer

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);
const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

const persistor = persistStore(store);
export { store, persistor };
