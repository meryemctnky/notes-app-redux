import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notes/notesSlice";

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('notes', JSON.stringify(getState()));
    return result;
  };
};

const notesStore = () => {
  if (localStorage.getItem('notes') !== null) {
    return JSON.parse(localStorage.getItem("notes"))
  }
};

const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
  preloadedState: notesStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
