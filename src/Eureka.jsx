import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Eureka({ scale = 1, ...props }) {
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
      ref={ref}
      scale={isClicked ? scale * 1.5 : scale}
      onClick={() => setIsClicked(!isClicked)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      {...props}
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
