import { createSlice } from '@reduxjs/toolkit'



export const myStoreReducerSlice = createSlice({
  name:'myStore',
  initialState:{
    //ShoppingCartProducts: [{product:{"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}},productamount:2},
     // {product:{"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty","category":"electronics","image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg","rating":{"rate":4.8,"count":400}},productamount:5},
     // {product:{"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","category":"women's clothing","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg","rating":{"rate":4.7,"count":130}},productamount:3}]
    ShoppingCartProducts: [],
    currentCategory: 'ALL'
  },
  reducers:{
    addToCart:(state,action)=>{
      const currentproduct = action.payload[0]
      const currentamount = action.payload[1]
      if (state.ShoppingCartProducts.findIndex(aa=>aa.product.id ===currentproduct.id) === -1){
        state.ShoppingCartProducts.push({product:currentproduct, productamount:currentamount})
      }else{
        state.ShoppingCartProducts[state.ShoppingCartProducts.findIndex(aa=>aa.product.id === currentproduct.id)].productamount += currentamount
      }
    },
    removeFromCart:(state, action)=>{  
      state.ShoppingCartProducts.splice(state.ShoppingCartProducts.findIndex(aaa=>aaa.product.id === action.payload),1)
    },

    setProductAmount:(state, action) =>{
      const currentproduct = action.payload[0]
      const currentamount = action.payload[1]
      if (currentamount === 0){
        state.ShoppingCartProducts.splice(state.ShoppingCartProducts.findIndex(aaa=>aaa.product.id === currentproduct.id),1)
      }else {
        state.ShoppingCartProducts[state.ShoppingCartProducts.findIndex(aa=>aa.product.id === currentproduct.id)].productamount = currentamount
      }
    },
    setCategory:(state, action) =>{
      state.currentCategory = action.payload
    }

    
  }
})

export const {addToCart, removeFromCart,setProductAmount,setCategory} = myStoreReducerSlice.actions

export const numberofDiffProductsinCart = (state) =>state.eeeshop.ShoppingCartProducts.length
export const productArrayinCart = (state) =>state.eeeshop.ShoppingCartProducts
export const totalNumberOfProducts = (state) => state.eeeshop.ShoppingCartProducts.reduce((b,a)=>b + a.productamount,0)
export const totalPrice = (state)=>state.eeeshop.ShoppingCartProducts.reduce((b,a)=>b + a.productamount * a.product.price,0)
export const selectedCategory = (state)=>state.eeeshop.currentCategory



export default myStoreReducerSlice.reducer