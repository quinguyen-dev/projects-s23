import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { RevolvingTorusKnot } from "src/components";

export default function RevolvingAsset() {
    return (
        <motion.div
            className="ra-container"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Canvas>
                <RevolvingTorusKnot />
                <ambientLight intensity={0.1} />
                <spotLight position={[-50, 50, -50]} />
            </Canvas>
        </motion.div>
    );
} /* TODO look to add Suspense here */
