import { configureStore } from '@reduxjs/toolkit';
import {  useDispatch  } from 'react-redux';
import homePage from "./containers/HomePage/reducers"


const store = configureStore({
    reducer: 
         homePage
    
})


export default store;