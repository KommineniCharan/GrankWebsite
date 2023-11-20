import { createSlice } from "@reduxjs/toolkit";

const shoppingsecuSlice = createSlice({
  name: "shoppingsecu",
  initialState: {
    card: { userId: 0, productssecu: [] },
    productssecu: [],
  },
  reducers: {
    addsecuProducts: (state, action) => {
      //add product to list
      return { ...state, productssecu: action.payload };
    },
    addsecuCard: (state, { payload: prod }) => {
      //quantity increase by 1
      const index = state?.card?.productssecu?.findIndex(
        (pro) => pro.id == prod.id
      );
      if (index >= 0) {
        const p = state?.card?.productssecu[index];
        state.card.productssecu.splice(index, 1, {
          id: p.id,
          quantity: p.quantity + 1,
        });
      } else {
        state?.card?.productssecu.push({ id: prod.id, quantity: 1 }); //add one quantity
      }
    },
    removesecuCard: (state, { payload: prod }) => {
      //quantity decrease by 1
      const index = state?.card?.productssecu?.findIndex(
        (pro) => pro.id == prod.id
      );
      const p = state?.card?.productssecu[index];
      if (index >= 0 && p.quantity > 1) {
        state.card.productssecu.splice(index, 1, {
          id: p.id,
          quantity: p.quantity - 1,
        });
      } else if (p?.quantity == 1) {
        state.card.productssecu.splice(index, 1); // quantity zero(delete from card)
      }
    },
  },
});

export const { addsecuProducts, addsecuCard, removesecuCard } =
  shoppingsecuSlice.actions;

export const selectCardsecu = (state) => state.shoppingsecu.card;
export const selectProductssecu = (state) => state.shoppingsecu.productssecu;

export default shoppingsecuSlice.reducer;
