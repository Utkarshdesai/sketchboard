import CanvasBoard from "./components/Canvas/CanvasBoard";
import Menu from "./components/Menubar/Menu";
import Toolbox from "./components/Toolbar/Toolbox";
import './globals.css'


export default function Home() {
  return (
   <div >
    <div className="heading"> 
    <h2> Drawing Board </h2>
    <Menu/>
    </div>
  
    <Toolbox></Toolbox>
  
   </div>
  );
}
