import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import { Mesh } from 'three'
import * as THREE from 'three'

const MacContainer = () => {
let model = useGLTF("./mac.glb"); //import the GLTF model
let tex= useTexture('public/red.jpg'); //import the texture image
let meshes={};
// Store all the meshes in the model in a dictionary for easy access
model.scene.traverse((e)=> {
    
        meshes[e.name]=e;
    });
meshes.screen.rotation.x=THREE.MathUtils.degToRad(180); //rotate the screen 90 degrees on the y-axis
meshes.matte.material.emissiveMap = tex; // add emissive map
meshes.matte.material.emissiveIntensity =1; // set correct intensity
meshes.matte.material.emissive = new THREE.Color(0xffffff); // set emissive color


// Function to animate the MacBook's display
// Applying transformations to the model

let data=useScroll();

useFrame((state,delta)=>{
   meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset*90);
});
  return (
    <group position={[0,-10,20 ]}> //position the model at 0, -10, 20 in the scene
        <primitive object={model.scene} /> //render the GLTF model inside a primitive group
    </group>
  )
  
}

export default MacContainer 