import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: User = {
 address: '',
 balance: -1
};

const authStateSlice = createSlice({
  name: "auth state",
  initialState,
  reducers: {
    resetUser(state){
      state = initialState;
      return state;
    },
    setUser(state, action: PayloadAction<any>) {
      const user = action.payload;
      return {...state,  address: user.address, balance:user.balance};
    },
  },
});

export const { resetUser, setUser } = authStateSlice.actions;
export default authStateSlice.reducer;
