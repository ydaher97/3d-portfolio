import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('models/cube.glb');
  const meshRef = useRef();

  // Custom shader for water ripple effect
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0x0080ff) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vElevation;
        uniform float uTime;
        
        void main() {
          vUv = uv;
          
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          float elevation = sin(modelPosition.x * 10.0 + uTime) * 0.1
                          + sin(modelPosition.z * 10.0 + uTime) * 0.1;
          
          modelPosition.y += elevation;
          vElevation = elevation;
          
          gl_Position = projectionMatrix * viewMatrix * modelPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vElevation;
        
        void main() {
          float intensity = vElevation * 5.0 + 0.3;
          vec3 color = mix(uColor, vec3(1.0), intensity);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
  }, []);

  useFrame((state) => {
    meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={shaderMaterial}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/cube.glb');

export default Cube;