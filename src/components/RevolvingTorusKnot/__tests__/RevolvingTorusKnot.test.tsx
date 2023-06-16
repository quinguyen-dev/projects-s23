// @vitest-environment node

import ReactThreeTestRenderer from "@react-three/test-renderer";
import { RevolvingTorusKnot } from "src/components";
import { findComponentMesh } from "src/utils";

describe("RevolvingTorusKnot", () => {
    it("should have two children within the mesh", async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <RevolvingTorusKnot />
        );
        const mesh = renderer.scene.children[0]!.allChildren;

        expect(mesh.length).toBe(2);
    });

    it("should have the color 'grey'", async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <RevolvingTorusKnot />
        );
        const mesh = findComponentMesh(renderer, "meshPhysicalMaterial");

        expect(mesh?.props.color).toBe("grey");
    });
});
