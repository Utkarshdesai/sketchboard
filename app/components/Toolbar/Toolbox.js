"use client"
import React from 'react'
import style from './toolbox.module.css'
import {COLORS} from '@/app/Contstant'
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ITEMS } from '../../Contstant'
import { Changecolor, changeBrushSize } from '../Redux/slice/toolboxslice'
import { socket } from '@/app/socket';

const Toolbox = () => {
 
  const dispatch = useDispatch()
  const currentMenu = useSelector((state)=> state.menubar.itemactive)
 
  const {color , size} = useSelector((state)=> state.toolbar[currentMenu])
  console.log(color)
  console.log(size)
  
  const updatebrushsize = (e) => {
    dispatch(changeBrushSize({ item: currentMenu   , size:e.target.value}))
    socket.emit('changeConfig', {color, size: e.target.value })
  }

  const setcolor = (newcolor) => {
    dispatch(Changecolor({ item : currentMenu  , color : newcolor , size  }))
    socket.emit('changeConfig', {color: newcolor, size })
  }


  return (
    <div className={style.toolboxcontainer}>
    
        {
          currentMenu === MENU_ITEMS.PENCIL &&  
            (<div className={style.container}> 
              <div>
                  <h4 className={style.text}> Strokes</h4>
                </div>
      
                      <div className={style.colorcontainer}>
                      <div className={cx(style.colorBox, {[style.active]: color === COLORS.BLACK})}  style={{backgroundColor: COLORS.BLACK}} onClick={()=> setcolor(COLORS.BLACK)}/>
                      <div className={cx(style.colorBox, {[style.active]: color === COLORS.RED})}   style={{backgroundColor: COLORS.RED}} onClick={()=> setcolor(COLORS.RED)}                  />
                      <div className={cx(style.colorBox, {[style.active]: color === COLORS.GREEN})}  style={{backgroundColor: COLORS.GREEN}}  onClick={()=> setcolor(COLORS.GREEN)}/>
                      <div className={cx(style.colorBox, {[style.active]: color === COLORS.BLUE})}  style={{backgroundColor: COLORS.BLUE}} onClick={()=> setcolor(COLORS.BLUE)}/> 
                      <div className={cx(style.colorBox, {[style.active]: color === COLORS.ORANGE})}  style={{backgroundColor: COLORS.ORANGE}} onClick={()=> setcolor(COLORS.ORANGE)}/>
                      <div className={cx(style.colorBox, {[style.active]: color === COLORS.YELLOW})}  style={{backgroundColor: COLORS.YELLOW}} onClick={()=> setcolor(COLORS.YELLOW)}/>
              
                 </div>
            </div>)
        }
        
        {  
        (currentMenu === MENU_ITEMS.ERASER  || currentMenu === MENU_ITEMS.PENCIL) &&
         (<div className={style.container}>
          <label htmlFor='brush' className={style.text}> Brush size </label>
          <div className={style.itemcontainer}>
              <input
               type='range'
               min={0}
               max={10}
               step={1}
               id='brush'
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