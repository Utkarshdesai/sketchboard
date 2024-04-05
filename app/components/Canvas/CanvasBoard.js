"use client"
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styles from './canvas.module.css'
import { useDispatch, useSelector } from 'react-redux'


const CanvasBoard = () => {

  
  const canvasref = useRef(null)
  const shoulddraw = useRef (false)
  const currentMenu = useSelector((state)=> state.menubar.itemactive)
  const {color , size} = useSelector((state)=> state.toolbar[currentMenu])

  // draw on canvas
  useEffect(()=>{
    if(!canvasref.current) return 
    const canvas = canvasref.current
    const contex = canvas.getContext('2d')

   

    const changeconfig = (color ,size) => {
      contex.lineWidth = size
      contex.strokeStyle = color
    }
   
    changeconfig(color , size)

  },[size , color])

  //set canvas width and height
  useLayoutEffect(()=>{
    
    if(!canvasref.current) return 
    const canvas = canvasref.current
    const contex = canvas.getContext('2d')
    
    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight ;
    // TODO - set width and height as full screen 
    
    const Beginpath = () => {
      contex.beginPath()
      contex.moveTo(e.clientX , e.clientY) 
    }

    const Drwaline = () =>{
      contex.lineTo(e.clientX ,e.clientY)
      contex.stroke()
    }

    const handlemousedown = (e) => {
      shoulddraw.current = true
      console.log('press')
      Beginpath()
      
    } 
  
    const handlemousemove = (e) => {
      
       if(!shoulddraw.current == true) return
          
          console.log('yes')
               
    }

    const handlemouseup = () =>{
      shoulddraw.current = false
      console.log('up')
   }
   

    canvas.addEventListener('mousedown' ,handlemousedown)
    canvas.addEventListener('mousemove' ,handlemousemove)
    canvas.addEventListener('mouseup' ,handlemouseup)

    return ( ()=>{
      canvas.removeEventListener('mousedown' ,handlemousedown)
      canvas.removeEventListener('mousemove' ,handlemousemove)
      canvas.removeEventListener('mouseup' ,handlemouseup)
  
    })

  },[])

 
  
  return (
  
    <canvas ref={canvasref}> </canvas>
  
  )
}

export default CanvasBoard