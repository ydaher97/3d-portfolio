import { useGLTF, useTexture, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // const createGlowTexture = () => {
  //   const canvas = document.createElement('canvas');
  //   canvas.width = 256;
  //   canvas.height = 256;
  //   const context = canvas.getContext('2d');
  //   const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
  //   gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  //   gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  //   context.fillStyle = gradient;
  //   context.fillRect(0, 0, 256, 256);
  //   return new THREE.CanvasTexture(canvas);
  // };

  // // Load a texture for the glow effect
  //  const glowTexture = createGlowTexture();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  useFrame((state) => {
    targetRef.current.rotation.y += 0.01;
    
    // Dynamic color change based on time
    const hue = (state.clock.elapsedTime * 0.1) % 1;
    targetRef.current.material.color.setHSL(hue, 1, 0.5);
  });

  return (
    <group>
      <mesh
        {...props}
        ref={targetRef}
        rotation={[0, Math.PI / 4, 0]}
        scale={clicked ? 1.8 : hovered ? 1.7 : 1.5}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={scene} />
        <MeshDistortMaterial
          color={hovered ? 'hotpink' : 'lightblue'}
          speed={5}
          distort={0.3}
          radius={1}
        />
      </mesh>
      {/* Glow effect */}
      {/* <sprite scale={[3, 3, 1]} position={props.position}>
        <spriteMaterial
          map={glowTexture}
          transparent
          opacity={0.5}
          color={hovered ? 0xff69b4 : 0x00bfff}
        />
      </sprite> */}
    </group>
  );
};

export default Target;