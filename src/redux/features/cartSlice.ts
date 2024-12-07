import { CartType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Init = {
    items: CartType[],
    totalCount: number,
    totalAmount: number
}
type QtyType = {
    id: string,
    qty: number
}
const initialState: Init = {
    items: [],
    totalCount: 0,
    totalAmount: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartType>) => {
            const findOldProduct = state.items.find(ele => ele.id === action.payload.id);
            if (!findOldProduct) {
                const updatedSubTotal = action.payload.qty * action.payload.curPrice;
                state.items.push({ ...action.payload, subTotal: updatedSubTotal });
            } else {
                state.items.forEach(ele => {
                    if (ele.id === action.payload.id) {
                        ele.qty += action.payload.qty;
                        ele.subTotal = ele.qty * ele.curPrice;
                    }
                })
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(ele => ele.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalCount = 0;
            state.totalAmount = 0;
        },
        handleQty: (state, action: PayloadAction<QtyType>) => {
            state.items.forEach(item => {
                if (item.id === action.payload.id) {
                    item.qty = action.payload.qty;
                    item.subTotal = item.qty * item.curPrice;
                }
            })
        },
        getTotal: (state) => {
            const { totalPrice, totalQty } = state.items.reduce((cartTotal, cartItem) => {
                const { qty, subTotal } = cartItem;
                cartTotal.totalQty += qty;
                cartTotal.totalPrice += subTotal
                return cartTotal
            }, { totalPrice: 0, totalQty: 0 });
            state.totalAmount = totalPrice;
            state.totalCount = totalQty;
        }
    }
})

export const { addToCart, removeFromCart, clearCart, handleQty, getTotal } = cartSlice.actions;
export default cartSlice.reducer;