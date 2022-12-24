import { Scene } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function loadGLTFModel(
  scene: Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const objectInScene = gltf.scene;
        objectInScene.name = 'dog';
        objectInScene.position.y = 0;
        objectInScene.position.x = 0;
        objectInScene.receiveShadow = receiveShadow;
        objectInScene.castShadow = castShadow;
        scene.add(objectInScene);

        objectInScene.traverse(function (child) {
          if ((<THREE.Mesh>child).isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(objectInScene);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
