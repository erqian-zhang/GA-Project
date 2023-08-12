import {configureStore} from '@reduxjs/toolkit'
import myStoreReducer from './myStoreReducerSlice'

export default configureStore({
  reducer:{
    eeeshop: myStoreReducer
  }
})