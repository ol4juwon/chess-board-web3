import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: User = {
 address: '',
 balance: 0
};

const authStateSlice = createSlice({
  name: "auth state",
  initialState,
  reducers: {
    resetUser(){
    },
    setUser(state, action: PayloadAction<any>) {
      const user = action.payload;
      return {...state,  address: user.address, balance:user.balance};
    },
  },
});

export const { resetUser, setUser } = authStateSlice.actions;
export default authStateSlice.reducer;
