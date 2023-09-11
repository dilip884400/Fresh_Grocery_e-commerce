import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    reviews:[]
}

const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state, action)=>{
        const newItem = action.payload
        const existingItem = state.cartItems.find(item => item.id === newItem.id)
        state.totalQuantity++

        if (!existingItem) {
            state.cartItems.push({
                id: newItem.id,
                imgUrl: newItem.imgUrl,
                productName: newItem.productName,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
            })
        }
        else {
            existingItem.quantity++
            existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
        }
        state.totalAmount = state.cartItems.reduce((total, item)=> total + Number(item.price)*Number(item.quantity),0)
    },
    deleteItem:(state,action)=>{
        const id = action.payload
        const existingItem = state.cartItems.find( item => item.id==id)
        if(existingItem){
            state.cartItems=state.cartItems.filter(item => item.id !==id)
            state.totalQuantity=state.totalQuantity- existingItem.quantity
    }
    state.totalAmount = state.cartItems.reduce((total, item)=> total + Number(item.price)*Number(item.quantity),0)
},

addReview:(state,action)=>{
    const reviews= action.payload
    if(reviews){
        state.reviews.push({
            name: username,
            text: userMsg,
            rating, 
        })
    }
}

  }
});

export const { addToCart, deleteItem,addReview } = userSlice.actions

export default userSlice.reducer;