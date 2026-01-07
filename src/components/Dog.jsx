import * as THREE from "three"
import { useEffect, useRef } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, useTexture, useAnimations } from "@react-three/drei"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const Dog = () => {


    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(gsap);


    const model = useGLTF("/models/dog.drc.glb");


    useThree(({ camera, gl, scene }) => {
        camera.position.z = 0.6;
        gl.toneMapping = THREE.ReinhardToneMapping;
        gl.outputColorSpace = THREE.SRGBColorSpace;


    })

    const { actions } = useAnimations(model.animations, model.scene);

    useEffect(() => {
        actions["Take 001"].play();
    }, [actions]);

    const [
        normalMap, sampleMatCap, brachesDiffuse, brachesNormal
    ] = (useTexture([
        "/dog_normals.jpg",
        "/met-cap/mat-2.png",
        "/branches_diffuse.jpg",
        "/branches_normals.jpg",
    ])).map(texture => {
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
    })


    const dogMeterial = new THREE.MeshMatcapMaterial({
        normalMap: normalMap,
        matcap: sampleMatCap,
    })

    const brachesMeterial = new THREE.MeshMatcapMaterial({
        normalMap: brachesNormal,
        map: brachesDiffuse,
    })

    model.scene.traverse((child) => {
        // console.log(child)
        if (child.name.includes("DOG")) {
            child.material = dogMeterial;
        } else {
            child.material = brachesMeterial;
        }
    });
    const dogModel = useRef(model);

    useGSAP(() =>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-1",
                endTrigger: "#section-3",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                markers: true,
            }
        })
        tl.to(dogModel.current.scene.position, {
            z: "-=0.75",
            y: "+=0.1",
          
        })
        .to(dogModel.current.scene.rotation, {
            x: `+=${Math.PI / 15}`,
          
        })
        .to(dogModel.current.scene.rotation, {
            y: `-=${Math.PI}`,
            
          
        }, "third")
        .to(dogModel.current.scene.position, {
            x: `-=0.5`,
            z: `+=0.5`,
            y: `-=0.05`,
          
        }, "third")
    })



    return (
        <>
            <primitive object={model.scene} position={[0.25, -0.55, 0]} rotation={[0, Math.PI / 3.9, 0]} />
            <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />
            {/* <OrbitControls /> */}
        </>
    )
}

export default Dog