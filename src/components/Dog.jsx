import * as THREE from "three"
import { useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, useTexture, useAnimations } from "@react-three/drei"

const Dog = () => {

    const model = useGLTF("/models/dog.drc.glb");
    // const model = useGLTF("/models/dog.drc.glb");

    useThree(({ camera, gl, scene }) => {
        camera.position.z = 0.6;
        gl.toneMapping = THREE.ReinhardToneMapping;
        gl.outputColorSpace = THREE.SRGBColorSpace;


    })

    const {actions } = useAnimations(model.animations, model.scene);

    useEffect(() => {
        actions["Take 001"].play();
    }, [actions]);

    const [
        normalMap, sampleMatCap
    ] = (useTexture([
        "/dog_normals.jpg",
        "/met-cap/mat-2.png",
    ])).map(texture => {
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
    })


    const dogMeterial  = new THREE.MeshMatcapMaterial({
        normalMap: normalMap,
        matcap: sampleMatCap,
    })

    model.scene.traverse((child) => {
        // console.log(child)
        if (child.name.includes("DOG")) {
            child.material = dogMeterial;
        }
    });
    return (
        <>
            <primitive object={model.scene} position={[0.25, -0.55, 0]} rotation={[0, Math.PI / 3.9, 0]} />
            <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />
            <OrbitControls />
        </>
    )
}

export default Dog