import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { PhoneModel } from "src/components";

export default function HtmlRender() {
    return (
        <Canvas className="html-container" camera={{ position: [5, 0, 0] }}>
            <group rotation={[0, Math.PI / 3, 0]}>
                <Float
                    speed={5}
                    rotationIntensity={1}
                    floatIntensity={20}
                    floatingRange={[-0.01, 0.02]}
                >
                    <PhoneModel />
                </Float>
            </group>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 1}
            />
            <pointLight position={[20, 10, 10]} intensity={1} />
        </Canvas>
    );
}
