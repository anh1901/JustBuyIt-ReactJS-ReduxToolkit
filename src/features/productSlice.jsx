import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    addNewProductOpen: false,
    isMenuOpen: true,
  },
  reducers: {
    openAddNewProduct: (state) => {
      state.addNewProductOpen = true;
    },
    closeAddNewProduct: (state) => {
      state.addNewProductOpen = false;
    },
    changeMenuState: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export const {
  openAddNewProduct,
  closeAddNewProduct,
  changeMenuState,
} = productSlice.actions;

export const selectAddNewProduct = (state) => state.product.addNewProductOpen;
export const selectMenu = (state) => state.product.isMenuOpen;

export default productSlice.reducer;
