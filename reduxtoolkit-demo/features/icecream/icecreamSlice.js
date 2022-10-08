const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

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
    builder.addCase(cakeActions.ordered, (state, action) => {
      state.numOfIcecreams -= action.payload || 1;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
