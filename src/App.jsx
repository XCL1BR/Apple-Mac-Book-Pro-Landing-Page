import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'; //importing CSS styles
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    
    <div className='w-full h-screen bg-black-600'>
      <div className='navbar flex gap-10 absolute top-3 left-1/2 -translate-x-1/2 font-sans '>
        {['Store',"iPhone","iPad" ,"MacBook", "iPod",'Watch','Airpods','TV & Homes','Entertainment','Support'].map(e=> <a href='' className='text-white font-[500] text-md'>{e}</a>)}
      </div>
    <div className="absolute flex flex-col items-center text-white top-12 left-1/2 -translate-x-1/2 z-20 font-['SF_Pro_Display']">
      <h3 className='text-6xl tracking-tight font-semibold'>
        MacBook Pro
      </h3>
      <h5 className='text-xl mt-2 font-medium'>Oh. So. Pro.</h5>
      <p className='text-center text-lg mt-4 max-w-2xl font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium totam a temporibus pariatur et sequi?</p>
    </div>
    
      
    <Canvas className='z-10' camera={{fov:12,position:[0,-10,220]}}> //fov stands for field of view, position sets the camera's position in the scene
      <OrbitControls />
      <Environment //lighting environment from a HDRI file
      files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']} 
      />
     <ScrollControls pages={3}>
     <MacContainer / > // Render the MacContainer component inside the Canvas
     </ScrollControls>
    </Canvas>
    </div>
  );
};

export default App