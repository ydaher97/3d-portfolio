/*
    Auto-generated by: https://github.com/pmndrs/gltfjsx
    Command: npx gltfjsx@6.5.0 react.glb -T
    Author: xenadus (https://sketchfab.com/xenadus)
    License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
    Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
*/


import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Trail, Float, Line, Sphere, useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useMediaQuery } from 'react-responsive'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('models/react.glb');
  
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Calculate position based on screen size
  const position = useMemo(() => {
    if (isSmall) return [3, 4, 0];
    if (isMobile) return [5, 4, 0];
    if (isTablet) return [5, 4, 0];
    return [12, 3, 0];
  }, [isSmall, isMobile, isTablet]);

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <group position={position} scale={0.3} {...props}>
        <Atom />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
      </group>
    </Float>
  );
};

function Atom(props) {
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
  return (
    <group {...props}>
      <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
      <Line worldUnits points={points} color="turquoise" lineWidth={0.3} rotation={[0, 0, 1]} />
      <Line worldUnits points={points} color="turquoise" lineWidth={0.3} rotation={[0, 0, -1]} />
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  )
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
  })
  return (
    <group {...props}>
      {/* <Trail local width={1} length={5} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}> */}
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
        {/* </Trail> */}
    </group>
  )
}

useGLTF.preload('models/react.glb');

export default ReactLogo;
