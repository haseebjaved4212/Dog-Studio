import { Canvas } from "@react-three/fiber"

const Dog = () => {
    return (
        <Canvas>
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color={0x00ff00} />
            </mesh>
        </Canvas>
    )
}

export default Dog