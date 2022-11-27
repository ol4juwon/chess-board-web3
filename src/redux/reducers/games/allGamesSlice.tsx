import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Games, GameState } from "../../types";

const initialState: number[] = [];

const allGamesSlice = createSlice({
  name: "Game state",
  initialState,
  reducers: {
    resetGame(state) {
      state = initialState;
      return state;
    },
    addGameId(state, action: PayloadAction<Games>) { 
       console.log("loik")
     const game =  action.payload;
   
      return {
        ...state,
        [game.id]: game.id
      }
    },
  },
});

export const { addGameId, resetGame } = allGamesSlice.actions;
export default allGamesSlice.reducer;
