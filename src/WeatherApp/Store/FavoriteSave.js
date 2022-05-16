import { createSlice } from "@reduxjs/toolkit";

const initialFavoriteSave = { info: [], id: 1 };


const FavoriteSaveSlice = createSlice({
  name: 'FavoriteSave',
  initialState: initialFavoriteSave,
  reducers: {
    SetFavorite(state, action) {
      const newItem = action.payload;
      const existingItem = state.info.find((item) => item.Country === newItem.Country && item.City === newItem.City);
      if (!existingItem) {
        state.info.push({
          id: state.id,
          Country: action.payload.Country,
          City: action.payload.City,
          temperature: action.payload.Temperature,
          icon: action.payload.icon
        });
        //Allow because reduxjs/toolkit
        state.id = state.id + 1;
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.info.find((item) => item.id === id);
      if (existingItem) {
        state.info = state.info.filter((item) => item.id !== id);
      }
    }

  }
})

export const FavoriteSavetActions = FavoriteSaveSlice.actions;

export default FavoriteSaveSlice.reducer;