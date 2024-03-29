import React from 'react'
import style from './menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  return (
    <div className={style.menucontainer}>

       <div className={style.iconcontainer}>
       <FontAwesomeIcon icon={faPencil} className={style.icon}/>
       </div>
       <div  className={style.iconcontainer} >
       <FontAwesomeIcon icon={faEraser} className={style.icon}/>
       </div>
       <div className={style.iconcontainer}>
       <FontAwesomeIcon icon={faRotateLeft} className={style.icon}/>
       </div>
       <div  className={style.iconcontainer}>
       <FontAwesomeIcon icon={faRotateRight} className={style.icon}/>
       </div>
       <div  className={style.iconcontainer} >
       <FontAwesomeIcon icon={faFileArrowDown} className={style.icon}/>
       </div>

    </div>
  )
}

export default Menu