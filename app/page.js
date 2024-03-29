import CanvasBoard from "./components/Canvas/CanvasBoard";
import Menu from "./components/Menubar/Menu";
import './globals.css'


export default function Home() {
  return (
   <div className="heading">
   <h1> Drawing Board </h1>
   <Menu/>
  
   </div>
  );
}
