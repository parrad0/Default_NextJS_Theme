/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-computed-key */
import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

export interface InitialState {
  test: string;
}

const initialState: InitialState = {
  test: 'rtk test',
};
// FLAT REDUCER
export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    update: (state, action) => {
      return produce(state, (drafstate) => {
        drafstate.test = action.payload;
      });
    },
  },
});
export const { update } = appReducer.actions;
