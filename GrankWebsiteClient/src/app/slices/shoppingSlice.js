import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    card: { userId: 0, products: [] },
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      //add product to list
      return { ...state, products: action.payload };
    },
    addCard: (state, { payload: prod }) => {
      //quantity increase by 1
      const index = state?.card?.products?.findIndex(
        (pro) => pro.id == prod.id
      );
      if (index >= 0) {
        const p = state?.card?.products[index];
        state.card.products.splice(index, 1, {
          id: p.id,
          quantity: p.quantity + 1,
        });
      } else {
        state?.card?.products.push({ id: prod.id, quantity: 1 }); //add one quantity
      }
    },
    removeCard: (state, { payload: prod }) => {
      //quantity decrease by 1
      const index = state?.card?.products?.findIndex(
        (pro) => pro.id == prod.id
      );
      const p = state?.card?.products[index];
      if (index >= 0 && p.quantity > 1) {
        state.card.products.splice(index, 1, {
          id: p.id,
          quantity: p.quantity - 1,
        });
      } else if (p?.quantity == 1) {
        state.card.products.splice(index, 1); // quantity zero(delete from card)
      }
    },
  },
});

export const { addProducts, addCard, removeCard } = shoppingSlice.actions;

export const selectCard = (state) => state.shopping.card;
export const selectProducts = (state) => state.shopping.products;

export default shoppingSlice.reducer;
