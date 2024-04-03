import { configureStore } from "@reduxjs/toolkit";
import menubarreducer from './slice/Menuboxslice'
import toolbarReducer from './slice/toolboxslice'
export const store = configureStore({
    reducer:{
        menubar : menubarreducer ,
        toolbar : toolbarReducer ,
    }
})