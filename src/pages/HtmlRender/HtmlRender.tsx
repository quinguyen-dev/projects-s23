import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PhoneModel } from "src/components";

export default function HtmlRender() {
    return (
        <Canvas camera={{ position: [5, 0, 0] }}>
            <group rotation={[0, Math.PI / 3, 0]}>
                <PhoneModel />
            </group>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                // minPolarAngle={Math.PI / 2.2}
                // maxPolarAngle={Math.PI / 2.2}
                // minAzimuthAngle={Math.PI / 20}
                // maxAzimuthAngle={Math.PI / 1.7}
            />
            <pointLight position={[20, 10, 10]} intensity={0.5} />
        </Canvas>
    );
}
