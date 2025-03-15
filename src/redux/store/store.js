import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice";
import sidebarReducer from "./sideBarSlice";
import gameReducer from "./gameSlice";
import storeReducer from "./storeSlice";
import creatorReducer from "./creatorSlice";

const store = configureStore({
  reducer: {
    creator: creatorReducer,
    game: gameReducer,
    genre: genreReducer,
    sidebar: sidebarReducer,
    store: storeReducer,
  },
});

export default store;
