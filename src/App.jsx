import './App.css'
// import { Canvas } from "@react-three/fiber";
import Header from "./components/Header.jsx";
import CanvasContainer from './components/CanvasContainer';

//on fait de jolis anneaux et c'est annoté pour hanane le sang de la veine sisi

export default function App() {

  return (
    <div className={"app"}>
      <Header />
      <CanvasContainer />
    </div>
  )
}


