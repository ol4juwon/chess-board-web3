import * as types from '../types/games';
export const addGame =
  (payload: any) =>
  (dispatch:any) => {

    dispatch({
      type: types.ADD_GAME_REQUEST
    });
    dispatch({
        type: types.ADD_GAME_SUCCESS,
        payload
      });
  };