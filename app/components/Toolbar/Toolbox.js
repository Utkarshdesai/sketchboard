import React from 'react'
import style from './toolbox.module.css'
import {COLORS} from '@/app/Contstant'
//import cx from 'classnames';

const Toolbox = () => {
  return (
    <div className={style.toolboxcontainer}>
        <div>
            <h4 className={style.Stroke}> Strokes</h4>
        </div>

        <div className={style.colourcontainer}>
        <div className= {style.colourbox}  style={{backgroundColor: COLORS.BLACK}}/>
        <div className= {style.colourbox}  style={{backgroundColor: COLORS.RED}}/>
        <div className= {style.colourbox}  style={{backgroundColor: COLORS.GREEN}}/>
        <div className= {style.colourbox}  style={{backgroundColor: COLORS.BLUE}}/> 
        <div className= {style.colourbox}  style={{backgroundColor: COLORS.WHITE}}/>
        <div className= {style.colourbox}  style={{backgroundColor: COLORS.ORANGE}}/>

        </div>

        <div>
            <h5> Brush size</h5>
            <div>
                <input
                 type='range'
                 min={0}
                 max={10}
                 step={1}
               
                />
            </div>
        </div>
    </div>
  )
}

export default Toolbox