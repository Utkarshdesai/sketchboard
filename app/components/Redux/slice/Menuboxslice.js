import { createSlice } from "@reduxjs/toolkit";
import {MENU_ITEMS} from '@/app/Contstant'

const initialState  ={
  itemactive :MENU_ITEMS.PENCIL ,
  actionitem : null
}

export const menubox = createSlice({
   name:"menubar",
   initialState ,
   reducers : {
     activemenu:(state,action) =>{
        state.itemactive = action.payload
     },
     menuactionclick : (state,action) => {
       state.actionitem = action.payload
     }
   }
})

export const {activemenu ,menuactionclick} = menubox.actions

export default menubox.reducer
   