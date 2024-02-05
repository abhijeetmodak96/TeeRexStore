import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    filters: [],
    listofProducts: [],
    filteredProducts: [],
    searchText: "",
  },
  reducers: {
    toggleFilter: (state, action) => {
      const filter = action.payload;
      if (state.filters.includes(filter)) {
        state.filters = state.filters.filter((f) => f !== filter);
      } else {
        state.filters.push(filter);
      }
    },
    addListofProducts: (state, action) => {
      state.listofProducts = action.payload;
    },
    addFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  toggleFilter,
  addListofProducts,
  addFilteredProducts,
  addSearchText,
} = productSlice.actions;
export default productSlice.reducer;
