import * as THREE from "three"

import { Canvas , useThree} from "@react-three/fiber"
import { OrbitControls, useGLTF , useTexture } from "@react-three/drei"

const Dog = () => {

const model = useGLTF("/models/dog.drc.glb");

useThree(({camera, gl , scene }) => {
    // console.log(camera.position)
    camera.position.z = 0.6 
   
})

const texture = useTexture({
    normalMap: "/dog_normals.jpg",
    sampleMatCap : "/met-cap/mat-2.png",
    // normalScale: [0.1, 0.1],
});


texture.normalMap.flipY = false;




model.scene.traverse((child) => {
    // console.log(child)
    if (child.name.includes("DOG")) {
        child.material = new THREE.MeshMatcapMaterial({
            normalMap: texture.normalMap,
            matcap: texture.sampleMatCap,
        }) }
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