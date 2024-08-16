import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCharacter: null,
  page: 1,
  filters: {
    name: '',
    status: '',
    species: '',
    gender: '',
  },
  sortBy: '',
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setSelectedCharacter(state, action) {
      state.selectedCharacter = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    clearCharacter(state) {
      state.selectedCharacter = null;
    },
  },
});

export const { setSelectedCharacter, setPage, setFilters, setSortBy, clearCharacter } = characterSlice.actions;
export default characterSlice.reducer;
