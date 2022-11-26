import { type } from 'os';
import { Games } from '../../components/GameTables';
import * as types from '../types/games';

const initialState = {
  isLoading: false,
games: []
};

const GameReducer = (state = initialState, action: { type: any; payload: { data: any; }; }) => {
  switch (action.type) {
    case types.GET_AVAILABLE_GAMES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_AVAILABLE_GAMES_SUCCESS:
      return {
        ...state,
        isLoading: false,
       game: action.payload
      };
    case types.GET_AVAILABLE_GAMES_ERROR:
      return {
        ...state,
        isLoading: false
      };
      case types.ADD_GAME_SUCCESS:
        console.log('adding', state.games, action.payload)
        return {
          ...state,
          isLoading: false,
          games: action.payload,
        }
    default:
      return state;
  }
};

export default GameReducer;
