import { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Page from "./Page";
import { Mesh } from "three";

type GLTFResult = GLTF & {
    nodes: {
        Ellipse_2: THREE.Mesh;
        Cube_2: THREE.Mesh;
    };
    materials: {};
};

export default function PhoneModel(props: JSX.IntrinsicElements["group"]) {
    const mesh = useRef<Mesh>(null!);

    const { nodes, materials } = useGLTF(
        "/src/assets/gltf/phone.glb"
    ) as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <mesh
                ref={mesh}
                receiveShadow
                geometry={nodes.Ellipse_2.geometry}
                material={nodes.Ellipse_2.material}
                position={[0.22, 1.897, 0.174]}
                scale={0.008}
            >
                <Html
                    className="phone"
                    transform
                    occlude
                    position={[-28, -240, -1]}
                    scale={19.5}
                >
                    <Page />
                </Html>
            </mesh>

            <mesh
                receiveShadow
                geometry={nodes.Cube_2.geometry}
                material={nodes.Cube_2.material}
                position={[0.42, 1.485, -0.15]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.008}
            />
        </group>
    );
}
