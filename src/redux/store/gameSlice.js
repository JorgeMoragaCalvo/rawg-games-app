import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncGames, fetchAsyncGamesDetails } from "../utils/gameUtils";

const initialState = {
  games: [],
  gamesStatus: STATUS.IDLE,
  gamesSingle: [],
  gamesSingleStatus: STATUS.IDLE,
  gamesDetails: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGames.pending, (state) => {
      state.gamesStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncGames.fulfilled, (state, action) => {
      state.games = action.payload;
      state.gamesStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncGames.rejected, (state) => {
      state.gamesStatus = STATUS.FAILED;
    });

    builder.addCase(fetchAsyncGamesDetails.pending, (state) => {
      state.gamesSingleStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncGamesDetails.fulfilled, (state, action) => {
      state.gamesSingle = action.payload;
      state.gamesSingleStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncGamesDetails.rejected, (state) => {
      state.gamesSingleStatus = STATUS.FAILED;
    });
  },
  reducers: {},
});

//export const selectAllGames = (state) => state.game.games.results;

export default gameSlice.reducer;
