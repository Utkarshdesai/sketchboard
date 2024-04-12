"use client"
import React from 'react'
import style from './menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ITEMS } from '../../Contstant'
import { activemenu, menuactionclick } from '../Redux/slice/Menuboxslice'
import { socket } from '@/app/socket'

const Menu = () => {

   const dispatch = useDispatch()

   const p = useSelector((state)=> state.menubar.itemactive)
   const p2 = useSelector((state)=> state.menubar.actionitem)
   //console.log(p2)

   const CurrentItem = (itemname) =>{
     dispatch(activemenu(itemname))
     console.log(itemname)
   }

   const CurrentActionItem = (itemaction) => {
     dispatch(menuactionclick(itemaction))
     console.log(itemaction)
   } 

   
  return (
    <div className={style.menucontainer}>

       <div className={style.iconcontainer}  onClick={()=>CurrentItem(MENU_ITEMS.PENCIL)}>
       <FontAwesomeIcon icon={faPencil} className={style.icon} />
       </div>
       <div  className={style.iconcontainer} onClick={()=>CurrentItem(MENU_ITEMS.ERASER)}>
       <FontAwesomeIcon icon={faEraser} className={style.icon} />
       </div>
       <div className={style.iconcontainer} onClick={()=>CurrentActionItem(MENU_ITEMS.UNDO)}>
       <FontAwesomeIcon icon={faRotateLeft} className={style.icon} />
       </div>
       <div  className={style.iconcontainer}  onClick={()=>CurrentActionItem(MENU_ITEMS.REDO)}>
       <FontAwesomeIcon icon={faRotateRight} className={style.icon} />
       </div>
       <div  className={style.iconcontainer}  onClick={()=>CurrentActionItem(MENU_ITEMS.DOWNLOAD)} >
       <FontAwesomeIcon icon={faFileArrowDown} className={style.icon}  />
       </div>

    </div>
  )
}

export default Menu