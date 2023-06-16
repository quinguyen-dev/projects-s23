import { useRef } from "react";

/* https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations */
import { Mesh } from "three";
import { useFrame, useThree } from "@react-three/fiber";

export default function RotatingGeometry() {
    const mesh = useRef<Mesh>(null!);

    useThree(({ camera }) => {
        camera.position.z = 50;
    });

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.75;
        mesh.current.rotation.y += delta * 0.25;
    });

    return (
        <mesh ref={mesh}>
            <torusKnotGeometry args={[10, 3, 200, 20]} />
            <meshPhysicalMaterial
                roughness={0}
                reflectivity={1}
                color={"grey"}
            />
        </mesh>
    );
}
