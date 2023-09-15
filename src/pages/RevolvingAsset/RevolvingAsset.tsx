import { Canvas } from "@react-three/fiber";
import { RevolvingTorusKnot } from "src/components";

export default function RevolvingAsset() {
  return (
    <Canvas className="ra-container">
      <RevolvingTorusKnot />
      <ambientLight intensity={0.1} />
      <spotLight position={[-50, 50, -50]} />
    </Canvas>
  );
} /* TODO look to add Suspense here */
