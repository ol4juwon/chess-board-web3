import * as types from '../types/auth';
export const signRequest =
  ( address: string, balance: string) =>
  (dispatch:any) => {
    console.log('ols', address,balance)
    dispatch({
      type: types.SIGN_IN_REQUEST
    });
const user = {address, balance}
    dispatch({
        type: types.SIGN_IN_SUCCESS,
        payload: user
      });
  };