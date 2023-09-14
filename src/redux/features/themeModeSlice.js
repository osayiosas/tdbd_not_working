import { createSlice } from "@reduxjs/toolkit";

export const themeModeSlice = createSlice({
  name: "ThemeMode",
  initialState: {
    themeMode: 'dark',
  },
  reducers: {
    setthemeMode: (state, action) => {
     state.themeMode = action.payload;
    },
}

});

export const { setUser } = themeModeSlice.actions;
export default themeModeSlice.reducer;
