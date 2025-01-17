import { Canvas } from '@react-three/fiber';

function Three() {
  return (
    <div>
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>

        <ambientLight intensity={0.1} />
        <directionalLight color="yellow" position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
}

export default Three;
