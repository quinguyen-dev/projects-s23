import type {
  Renderer,
  TreeNode,
} from "@react-three/test-renderer/dist/declarations/src/types";

/* TODO:  rework this function */
export function findComponentMesh(
  renderer: Renderer,
  type: string
): TreeNode | undefined {
  const tree = renderer.toTree();
  const mesh = tree?.find((child: TreeNode) => child.type === "mesh");

  return mesh?.children.find((mesh) => mesh.type === type);
}
