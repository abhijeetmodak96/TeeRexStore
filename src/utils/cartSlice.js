import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists, update the quantity
        existingItem.quantity += 1;
        if (existingItem.quantity <= existingItem.totalQuantity) {
          state.totalAmount += existingItem.price;
        }
        if (existingItem.quantity > existingItem.totalQuantity) {
          existingItem.quantity = existingItem.totalQuantity;
        }
      } else {
        // If the item doesn't exist, add it to the array
        state.items.push({ ...newItem, quantity: 1 });
        state.totalAmount += newItem.price;
      }
    },
    removeItem: (state, action) => {
      const productIdToRemove = action.payload;

      // Find the index of the last occurrence of the product with the specified productId
      const lastIndex = state.items
        .map((item, index) => ({ index, item }))
        .filter(({ item }) => item.id === productIdToRemove)
        .pop()?.index;

      if (lastIndex !== undefined) {
        // If the product is found, reduce its quantity
        state.items[lastIndex].quantity -= 1;
        state.totalAmount -= state.items[lastIndex].price;
        // If the quantity becomes zero, remove the item from the array
        if (state.items[lastIndex].quantity === 0) {
          state.items.splice(lastIndex, 1);
        }
      }
    },

    clearCart: (state, action) => {
      return { items: [], totalAmount: 0 };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
