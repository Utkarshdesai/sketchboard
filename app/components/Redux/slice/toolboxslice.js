import { createSlice } from "@reduxjs/toolkit";
import {MENU_ITEMS} from '@/app/Contstant'
import {COLORS} from '@/app/Contstant'
const initialState  = 
{
 [MENU_ITEMS.PENCIL] : {
    color : COLORS.BLACK ,
    size : 3
 } ,

 [MENU_ITEMS.ERASER] : {
   color : COLORS.WHITE ,
   size : 3
 },
  
 [MENU_ITEMS.UNDO] : {},
 [MENU_ITEMS.REDO] : {},
 [MENU_ITEMS.DOWNLOAD] : {},
}

export const ToolbarSlice = createSlice({
   name:"toolbar",
   initialState ,
   reducers : {
      Changecolor : (state , action) => {
        state[action.payload.item].color = action.payload.color
      },

      changeBrushSize : (state ,action) => {
        state[action.payload.item].size = action.payload.size
      }
   }
})

export const {Changecolor , changeBrushSize} = ToolbarSlice.actions

export default ToolbarSlice.reducer
   