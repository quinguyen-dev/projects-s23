import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { PhoneModel } from "src/components";

export default function HtmlRender() {
    return (
        <Canvas camera={{ position: [5, 0, 0] }}>
            <group rotation={[0, Math.PI / 2, 0]}>
                <PhoneModel />
            </group>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 2.2}
                maxPolarAngle={Math.PI / 2.2}
            />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <Environment background preset="studio" blur={0.8} />
        </Canvas>
    );
}
