import { useRef } from "react";

/* https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";

function RotatingTorusWireframe() {
    const mesh = useRef<Mesh>(null!);

    useThree(({ camera }) => {
        camera.position.z = 40;
    });

    useFrame(({ clock }) => {
        mesh.current.rotation.x = clock.getElapsedTime() * 0.5;
        mesh.current.rotation.y = clock.getElapsedTime() * 0.1;
    });

    return (
        <mesh ref={mesh}>
            <torusGeometry args={[10, 4, 16, 50]} />
            <meshPhysicalMaterial wireframe={true} />
        </mesh>
    );
}

export default function RevolvingAsset() {
    return (
        <div className="ra-container">
            <Canvas>
                <RotatingTorusWireframe />
                <ambientLight />
                <directionalLight position={[0, 100, 20]} />
            </Canvas>
        </div>
    );
}
