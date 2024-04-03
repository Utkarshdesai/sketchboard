"use client"
import React from 'react'
import style from './toolbox.module.css'
import {COLORS} from '@/app/Contstant'
//import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ITEMS } from '../../Contstant'
import { Changecolor, changeBrushSize } from '../Redux/slice/toolboxslice'

const Toolbox = () => {
 
  const dispatch = useDispatch()
  const currentMenu = useSelector((state)=> state.menubar.itemactive)
 
  const {color , size} = useSelector((state)=> state.toolbar[currentMenu])
  console.log(color)
  console.log(size)
  
  const updatebrushsize = (e) => {
    dispatch(changeBrushSize({ item: currentMenu   , size:e.target.value}))
  }

  const setcolor = (newcolor) => {
    dispatch(Changecolor({ item : currentMenu  , color : newcolor , size  }))
  }


  return (
    <div className={style.toolboxcontainer}>
    
        {
          currentMenu === MENU_ITEMS.PENCIL &&  
            (<div> 
              <div>
                  <h4 className={style.Stroke}> Strokes</h4>
                </div>
      
                      <div className={style.colourcontainer}>
                      <div className= {style.colourbox}  style={{backgroundColor: COLORS.BLACK}} onClick={()=> setcolor(COLORS.BLACK)}/>
                      <div className= {style.colourbox}  style={{backgroundColor: COLORS.RED}}  onClick={()=> setcolor(COLORS.RED)}                  />
                      <div className= {style.colourbox}  style={{backgroundColor: COLORS.GREEN}} onClick={()=> setcolor(COLORS.GREEN)}/>
                      <div className= {style.colourbox}  style={{backgroundColor: COLORS.BLUE}} onClick={()=> setcolor(COLORS.BLUE)}/> 
                      <div className= {style.colourbox}  style={{backgroundColor: COLORS.WHITE}} onClick={()=> setcolor(COLORS.WHITE)}/>
                      <div className= {style.colourbox}  style={{backgroundColor: COLORS.ORANGE}} onClick={()=> setcolor(COLORS.ORANGE)}/>
              
                 </div>
            </div>)
        }
        
        {  
          currentMenu === MENU_ITEMS.ERASER  || currentMenu === MENU_ITEMS.PENCIL &&
         (<div className={style.brushcontainer}>
          <p> Brush size </p>
          <div>
              <input
               type='range'
               min={0}
               max={10}
               step={1}
               value={size}
               onChange={updatebrushsize}
              />
          </div>
          
      </div>)
     }
      
      
    </div>
  )
}

export default Toolbox