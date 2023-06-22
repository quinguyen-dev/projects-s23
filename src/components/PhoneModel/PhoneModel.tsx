import { useGLTF, Html } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Page from "./Page";

type GLTFResult = GLTF & {
    nodes: {
        Ellipse_2: THREE.Mesh;
        Cube_2: THREE.Mesh;
    };
    materials: {};
};

export default function PhoneModel(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(
        "/src/assets/gltf/phone.glb"
    ) as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_2.geometry}
                material={nodes.Ellipse_2.material}
                position={[0.22, 1.897, 0.174]}
                scale={0.008}
            >
                <Html
                    transform
                    occlude
                    position={[0.22, 1.897, 0.174]}
                    style={{ backgroundColor: "red" }}
                    distanceFactor={300}
                >
                    <Page />
                </Html>
            </mesh>
            <mesh
                castShadow
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
