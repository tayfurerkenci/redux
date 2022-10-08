import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecreams -= action.payload || 1;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload || 1;
    },
  },
  // not preferred aproach
  // extraReducers: {
  //   ['cake/ordered']: (state, action) => {
  //     state.numOfIcecreams -= action.payload || 1;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIcecreams -= action.payload || 1;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
