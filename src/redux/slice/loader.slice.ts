
import {createSlice} from '@reduxjs/toolkit';

type LoaderState = {
    loader: {
      enable: boolean;
      text?: string;
    };
  };
  
const initialState: LoaderState = {
    loader: {
        enable: false,
    },
};
  
const loader = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        showSlice: (state, action) => {
            state.loader.enable = true;
            return state
        },
        hideSlice: (state, action) => {
            state.loader.enable = false;
            return state
        }
    },
})
export const { showSlice, hideSlice } = loader.actions
export default loader.reducer