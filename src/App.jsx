import  Dog  from "./components/Dog.jsx"
import { Canvas } from "@react-three/fiber"
import "./App.css"

 const App = () => {
  return (
    <>
    <main>
    <Canvas>
      <Dog />
    </Canvas>
    <section></section>
    <section></section>
    <section></section>
    </main>
      
    </>
  )
}

export default App
