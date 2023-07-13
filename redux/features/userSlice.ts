"use client";


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../api/types';

interface IUserState {
  user: IUser | null;
  isLogin: boolean
}



const initialState: IUserState = {
  user: {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  },
  isLogin: false
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: (state) => {
      localStorage.setItem("data", JSON.stringify({ ...state, isLogin: false }))
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;

      localStorage.setItem("data", JSON.stringify(
        {
          user: {
            email: action.payload.email,
            password: action.payload.password,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName
          },
          isLogin: true
        }
      ));
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
