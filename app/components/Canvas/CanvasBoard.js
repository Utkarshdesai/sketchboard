"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import style from './canvas.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ITEMS } from '@/app/Contstant'
import { menuactionclick  } from '../Redux/slice/Menuboxslice'
import { socket } from '@/app/socket';



const CanvasBoard = () => {

  const dispatch = useDispatch()
  const[modal,setmodal] = useState([])
  const canvasref = useRef(null)
  const historyPointer = useRef(0)
  const drawHistory = useRef([])
  const shoulddraw = useRef (false)
  const currentMenu  = useSelector((state)=> state.menubar.itemactive)
  const {color , size} = useSelector((state)=> state.toolbar[currentMenu])
  const actionitem = useSelector((state)=> state.menubar.actionitem)
  //console.log(actionitem)
  
  //UNDO REDO and DOWNLOAD feature
  useEffect(()=>{
    console.log('download feat')
    if(!canvasref.current == true) return
    const canvas = canvasref.current
    const contex = canvas.getContext('2d',{ willReadFrequently: true })
    console.log(contex)

    console.log(actionitem)

      if(actionitem === MENU_ITEMS.DOWNLOAD)
      {
          //download 
          console.log('download feat2')
          const dataurl = canvas.toDataURL()
          console.log(dataurl)
          console.log('download feat3')
          const anchor = document.createElement('a')
          console.log(anchor)
          anchor.href = dataurl
          anchor.download = 'sketch.jpg'
          anchor.click()
          console.log(anchor)
      }
     else if (actionitem === MENU_ITEMS.UNDO || actionitem === MENU_ITEMS.REDO) 

     {  
        if(historyPointer.current === 0 && drawHistory.current.length === 0) 
        {
          alert('draw something on canvas')
        }
        else if(historyPointer.current > 0  && actionitem === MENU_ITEMS.UNDO) 
        {
          historyPointer.current  -= 1
          console.log(historyPointer.current)
          const imageData = drawHistory.current[historyPointer.current]
          console.log(imageData)
          contex.putImageData(imageData ,0 , 0)
        }
       
        else if (historyPointer.current < drawHistory.current.length -1   && actionitem === MENU_ITEMS.REDO) 
        {
          historyPointer.current  += 1
          console.log(historyPointer.current)
          const imageData = drawHistory.current[historyPointer.current]
          console.log(imageData)
          contex.putImageData(imageData ,0 , 0)
        }
             
     }
 
     dispatch(menuactionclick(null))

  },[actionitem ,dispatch])
 
  // Change brush size and color 
  useEffect(()=>{
    if(!canvasref.current) return 
    const canvas = canvasref.current
    const contex = canvas.getContext('2d' ,{ willReadFrequently: true })

    const changeConfig = (color, size) => {
      contex.strokeStyle = color ;
      contex.lineWidth = size ;
  }

    const handleChangeConfig = (config) => {
        console.log("config", config)
        changeConfig(config.color, config.size)
    }
    changeConfig(color, size)
    socket.on('changeConfig', handleChangeConfig)

    return () => {
        socket.off('changeConfig', handleChangeConfig)
    }

  },[color,size])

  //Draw and Erase feature
  useLayoutEffect(()=>{
    
    if(!canvasref.current) return 
    const canvas = canvasref.current
    const contex = canvas.getContext('2d' ,{ willReadFrequently: true })
    
    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight
    console.log(canvas.width)
    console.log(canvas.height)
    // TODO - set width and height as full screen 

    const beginPath = (x, y) => {
       contex.beginPath()
       contex.moveTo(x, y)
    }

     
      const drawLine = (x,y) =>{
        contex.lineTo(x,y)
        contex.stroke()
      }
      
    
      const handlemousedown = (e) => {
      shoulddraw.current = true
      console.log('press')
      beginPath(e.clientX , e.clientY)
      socket.emit('beginPath' ,{x:e.clientX , y: e.clientY})
             
      
    } 
  
    const handlemousemove = (e) => {
      
       if(!shoulddraw.current == true) return
       drawLine(e.clientX , e.clientY)
       socket.emit('drawLine' , {x:e.clientX , y: e.clientY} )
                     
    }

    const handlemouseup = () =>{
      shoulddraw.current = false
      console.log('up')
      //capture the canvas
      const imageData = contex.getImageData(0,0,canvas.width , canvas.height)
      console.log(imageData)
      //push state to array
      drawHistory.current.push(imageData)
      console.log(drawHistory)
      historyPointer.current = drawHistory.current.length - 1
      console.log(historyPointer.current)

      //set histroypointer value
   }

      const handleBeginPath = (path) => {
        beginPath(path.x, path.y)
      }

      const handleDrawLine = (path) => {
          drawLine(path.x, path.y)
      }
        

    canvas.addEventListener('mousedown' ,handlemousedown)
    canvas.addEventListener('mousemove' ,handlemousemove)
    canvas.addEventListener('mouseup' ,handlemouseup)

    socket.on('beginPath', handleBeginPath)
    socket.on('drawLine', handleDrawLine)


    return ( ()=>{
      canvas.removeEventListener('mousedown' ,handlemousedown)
      canvas.removeEventListener('mousemove' ,handlemousemove)
      canvas.removeEventListener('mouseup' ,handlemouseup)

      socket.off('beginPath', handleBeginPath)
      socket.off('drawLine', handleDrawLine)
  
    })

  },[])

 
  
  return (<canvas ref={canvasref} className={style.canvas}></canvas>
)
}

export default CanvasBoard