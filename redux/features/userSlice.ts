"use client";


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../api/types';

interface IUserState {
  user: IUser | null;
}

const data =
    localStorage.getItem("data") !== null
        ? JSON.parse(String(localStorage.getItem("data")))
        : [];

const initialState: IUserState = {
  user: data
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: (state) => {
      localStorage.setItem("data", JSON.stringify(initialState));
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      localStorage.setItem("data", JSON.stringify(state.user));
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
