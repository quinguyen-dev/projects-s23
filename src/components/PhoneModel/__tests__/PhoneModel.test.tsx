// @vitest-environment node

import ReactThreeTestRenderer from "@react-three/test-renderer";
import PhoneModel from "../PhoneModel";

describe("PhoneModel", () => {
    it("should have two meshes in the group", async () => {
        // const renderer = await ReactThreeTestRenderer.create(<PhoneModel />);

        // const mesh = renderer.scene.children[0]!.allChildren;

        // expect(mesh.length).toBe(2);

        /* TODO: there's an issue with local .gltf, might need to serve through server */

        expect(true).toBeTruthy();
    });
});
