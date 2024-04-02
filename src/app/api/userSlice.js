import { createSlice } from "@reduxjs/toolkit";

const apiSlce = createSlice({
  name: "userSlice",
  initialState: {
    userDetails: [],
    wantToUpdate: false,
    editableUSer: null,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setSlider: (state, action) => {
      state.wantToUpdate = action.payload;
    },
    setEditable: (state, action) => {
      state.editableUSer = action.payload;
    },
  },
});
export const { setUserDetails, setSlider, setEditable } = apiSlce.actions;
export default apiSlce.reducer;
