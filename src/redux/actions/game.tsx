import * as types from '../types/games';
export const addGame =
  (payload: any) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {

    dispatch({
      type: types.ADD_GAME_REQUEST
    });
    dispatch({
        type: types.ADD_GAME_SUCCESS,
        payload
      });
  };