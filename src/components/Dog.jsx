import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const Dog = () => {
    return (
        <Canvas>
            <OrbitControls />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color={0x00ff00} />
            </mesh>
        </Canvas>
    )
}

export default Dog