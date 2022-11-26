import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Games, GameState } from "../types";

const initialState: GameState = {
  games: []
};

const gameStateSlice = createSlice({
  name: "Game state",
  initialState,
  reducers: {
    resetGame(state) {
      state = initialState;
      return state;
    },
    addgame(state, action: PayloadAction<Games>) {
      console.log('ss')
      state.games.push(action.payload)
    },
  },
});

export const { addgame, resetGame } = gameStateSlice.actions;
export default gameStateSlice.reducer;
