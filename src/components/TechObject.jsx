import React, { useRef } from 'react';
import { useFrame ,Canvas} from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Import all technology icons
import javascript from "../tech/javascript.png";
import typescript from "../tech/typescript.png";
import html from "../tech/html.png";
import css from "../tech/css.png";
import reactjs from "../tech/reactjs.png";
import redux from "../tech/redux.png";
import tailwind from "../tech/tailwind.png";
import nodejs from "../tech/nodejs.png";
import mongodb from "../tech/mongodb.png";
import git from "../tech/git.png";
import figma from "../tech/figma.png";
import docker from "../tech/docker.png";
import threejs from "../tech/threejs.svg";

const technologies = [
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'React', icon: reactjs },
  { name: 'Redux', icon: redux },
  { name: 'Tailwind', icon: tailwind },
  { name: 'Node.js', icon: nodejs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Git', icon: git },
  { name: 'Figma', icon: figma },
  { name: 'Docker', icon: docker },
  { name: 'Three.js', icon: threejs },
];

const TechIcon = ({ name, icon, position }) => {
  const texture = new THREE.TextureLoader().load(icon);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <circleGeometry args={[0.5, 32]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
      <Text
        position={[position[0], position[1] - 0.8, position[2]]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </Float>
  );
};

const TechObject = () => {
  const groupRef = useRef();

  // Rotate the entire group around the Y-axis
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust this value for rotation speed
    }
  });

  return (
    <group ref={groupRef}>
      {technologies.map((tech, index) => {
        const angle = (index / technologies.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <TechIcon
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            position={[x, 0, z]}
          />
        );
      })}
    </group>
  );
};

const TechObjectCanvas = () => {
  return (
    <Canvas>
       <ambientLight intensity={1} />
       <OrbitControls enableZoom={false}/>
      <TechObject />
    </Canvas>
  );
};

export default TechObjectCanvas;