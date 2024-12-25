import { createSlice } from "@reduxjs/toolkit";
import productdata from "../components/product/productcardDetaile.json";
const initialState = {
    cart: [],
    items: productdata,
    totalQuantity: 0,
    totalPrice: 0
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},

})
export default cartSlice.reducer;
