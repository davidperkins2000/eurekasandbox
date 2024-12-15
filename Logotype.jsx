import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, OrthographicCamera } from '@react-three/drei'

function Eureka(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) => (
      (ref.current.rotation.x += delta),
      (ref.current.rotation.y += delta),
      (ref.current.rotation.z += delta)
    )
  )
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <icosahedronGeometry />
      <meshStandardMaterial
        color={hovered ? 'lime' : 'orange'}
        roughness={0.5}
        metalness={0}
      />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrthographicCamera />

      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={0.5} />
      <pointLight position={[-10, -10, -10]} />
      <Eureka position={[0, 0, 0]} />
    </Canvas>
  )
}
