"use client"
import { Provider } from 'react-redux'
import { store } from './components/Redux/Store'
import CanvasBoard from "./components/Canvas/CanvasBoard";
import Menu from "./components/Menubar/Menu";
import Toolbox from "./components/Toolbar/Toolbox";
import './globals.css'


export default function Home() {
  return (
   <Provider store={store}> 
   
    <div className="heading"> 
    <h2> Drawing Board </h2>
    <Menu/>
    </div>
  
    <Toolbox></Toolbox>
    <CanvasBoard/>
  
 
   </Provider> 
  );
}
