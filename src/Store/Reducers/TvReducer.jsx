import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const TvSlice = createSlice({
  name: "Tv",
  initialState,
  reducers: {
    loadTv: (state,action) => {
         state.info = action.payload
    },
    removeTv:(state,action) => {
      state.info = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {loadTv, removeTv} = TvSlice.actions;

export default TvSlice.reducer;