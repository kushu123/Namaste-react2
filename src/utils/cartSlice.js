import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //vanilla(older) Redux => DON'T MUTATE STATE

            //Redux Toolkit uses immer behind the scene
            //We have to mutate the state
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            //RTX either mutate the existing state or return a new state
            //state.items.length = 0;
            return { items: [] }; // this new[] will be replaced inside original state[]
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
