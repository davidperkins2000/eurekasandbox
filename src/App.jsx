import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  OrbitControls,
  OrthographicCamera,
  Bounds,
  Hud,
  PerformanceMonitor,
  View,
} from '@react-three/drei'
import Lights from './Lights'

export default function App() {
  return (
    <Canvas>
      <Lights />

      <OrthographicCamera makeDefault zoom={50} position={[0, 0, 100]} />

      {/* <Float position={[0, 0, 0]} speed={2} floatIntensity={5}> */}
      {/* <Eureka position={[-1.2, 0, 0]} /> */}
      {/* <Bounds> */}
      <Eureka position={[0, 0, 0]} />
      {/* </Bounds> */}
      {/* </Float> */}

      <OrbitControls />
    </Canvas>
  )
}

function Eureka({ scale = 1, ...props }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useFrame((_, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.rotation.z += delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={isClicked ? scale * 1.5 : scale}
      onClick={() => setIsClicked((prevState) => !prevState)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <icosahedronGeometry />
      <meshStandardMaterial
        color={isHovered ? 'lime' : 'orange'}
        roughness={0.5}
        metalness={0}
      />
    </mesh>
  )
}

