import CanvasBoard from "./components/Canvas/CanvasBoard";
import Menu from "./components/Menubar/Menu";
import Toolbox from "./components/Toolbar/Toolbox";
import './globals.css'

 function Home() {
  return (
    <>

    <div className="heading"> 
    <h2> Drawing Board </h2>
    <Menu/>
    </div>
  
    <Toolbox></Toolbox>
    <CanvasBoard/>
    </>
  )
}

export default Home;