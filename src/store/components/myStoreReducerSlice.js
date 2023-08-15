import { createSlice } from '@reduxjs/toolkit'

export const myStoreReducerSlice = createSlice({

  name:'myStore',

  initialState:{
    ShoppingCartProducts: [],
    currentCategory: 'ALL',
    searchResult: '',
    currentExpand: [],
  },

  reducers:{
    addToCart:(state,action)=>{
      const currentproduct = action.payload[0]
      const currentamount = action.payload[1]

      if (state.ShoppingCartProducts.findIndex(aa=>aa.product.id ===currentproduct.id) === -1){
        state.ShoppingCartProducts.push({product:currentproduct, productamount:currentamount})
      }else{
        state.ShoppingCartProducts[state.ShoppingCartProducts
          .findIndex(aa=>aa.product.id === currentproduct.id)].productamount += currentamount
      }
    },

    removeFromCart:(state, action)=>{  
      state.ShoppingCartProducts.splice(state.ShoppingCartProducts
        .findIndex(aaa=>aaa.product.id === action.payload),1)
    },

    setProductAmount:(state, action) =>{
      const currentproduct = action.payload[0]
      const currentamount = action.payload[1]

      if (currentamount === 0){
        state.ShoppingCartProducts.splice(state.ShoppingCartProducts
          .findIndex(aaa=>aaa.product.id === currentproduct.id),1)
      }else {
        state.ShoppingCartProducts[state.ShoppingCartProducts
          .findIndex(aa=>aa.product.id === currentproduct.id)].productamount = currentamount
      }
    },

    setCategory:(state, action) =>{
      state.currentCategory = action.payload
    },

    setSearchProducts:(state, action) =>{
      state.searchResult = action.payload
    },

    setCurrentExpand:(state,action)=>{
      if (action.payload === 'clear'){
        state.currentExpand = []
      }else {
      state.currentExpand = state.currentExpand.concat(action.payload)
      }
    }
  }
})

export const {addToCart, removeFromCart,setProductAmount,setCategory,setSearchProducts,setCurrentExpand} = myStoreReducerSlice.actions

export const numberofDiffProductsinCart = (state) =>state.eeeshop.ShoppingCartProducts.length
export const productArrayinCart = (state) =>state.eeeshop.ShoppingCartProducts
export const totalNumberOfProducts = (state) => state.eeeshop.ShoppingCartProducts.reduce((b,a)=>b + a.productamount,0)
export const totalPrice = (state)=>state.eeeshop.ShoppingCartProducts.reduce((b,a)=>b + a.productamount * a.product.price,0)
export const selectedCategory = (state)=>state.eeeshop.currentCategory
export const getsearchResults = (state)=>state.eeeshop.searchResult
export const getCurrentExpand = (state)=>state.eeeshop.currentExpand

export default myStoreReducerSlice.reducer