export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={0.5} />
      <pointLight position={[-10, -10, -10]} />
    </>
  )
}
