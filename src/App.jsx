import Dog from "./components/Dog.jsx"
import { Canvas } from "@react-three/fiber"
import "./App.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(gsap);













  return (
    <>
      <main>
        <Canvas style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
          backgroundImage: "url(/background-1.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

        }}>
          <Dog />
        </Canvas>
        <section id="section-1"></section>
        <section id="section-2"></section>
        <section id="section-3"></section>
      </main >

    </>
  )
}

export default App
