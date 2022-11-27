import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Games, GameState } from '../../types';

const initialState: Record<string, Games> = {};

const gamesByIdSlice = createSlice({
  name: 'gamesByIdDisplay',
  initialState,
  reducers: {

    addGame(state, action: PayloadAction<Games>) {
      const game = action.payload;
      //console.log(`adding consumer : ${consumer.id}`);
      return {
        ...state,
        [game.id]: game,
      };
    },
  },
});

export const {
addGame
} = gamesByIdSlice.actions;

export default gamesByIdSlice.reducer;
