import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Shadow, ContactShadows } from '@react-three/drei';
import MysteryBox from './MysteryBox';

const Box3DScene: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Update scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-full w-full absolute inset-0 z-10">
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
          color="#DC143C" 
        />
        <pointLight position={[-10, -10, -10]} color="#DC143C" intensity={0.5} />
        
        <MysteryBox scrollY={scrollY} />
        
        <ContactShadows 
          position={[0, -1, 0]} 
          opacity={0.4} 
          width={10} 
          height={10} 
          blur={1.5} 
          far={1.5} 
          color="#DC143C" 
        />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
      </Canvas>
    </div>
  );
};

export default Box3DScene;