"use client"
import React, { useEffect, useRef } from 'react'
import styles from './canvas.module.css'

const CanvasBoard = () => {

  const canvasref = useRef(null)

  useEffect(()=>{
 
    canvasref.current.width = window.outerWidth
    canvasref.current.height = window.outerHeight


  },[])
  
  return (
    <div className={styles.canvas}>
        
        <canvas ref={canvasref}> </canvas>
    </div>
  )
}

export default CanvasBoard