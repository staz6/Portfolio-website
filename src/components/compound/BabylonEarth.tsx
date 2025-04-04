import React, { useEffect } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

const BabylonEarth = () => {
  useEffect(() => {
    const canvas = document.getElementById("babylon-canvas") as HTMLCanvasElement;
    if (!canvas) {
      console.error("Canvas element not found!");
      return;
    }

    const engine = new BABYLON.Engine(canvas, true, { disableWebGL2Support: false });

    const getCameraRadius = () => {
      return window.innerWidth >= 1400 ? 2.5 : 2.8;
    };

    const createScene = async () => {
      const scene = new BABYLON.Scene(engine);
      scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

      const radius = getCameraRadius();
      const camera = new BABYLON.ArcRotateCamera(
        "Camera",
        Math.PI / 4,
        Math.PI / 2.2,
        radius,
        BABYLON.Vector3.Zero(),
        scene
      );
      camera.attachControl(canvas, true);
      camera.wheelPrecision = 0;
      camera.panningSensibility = 0;
      camera.minZ = 0.1;
      camera.maxZ = 100;
      camera.lowerRadiusLimit = radius;
      camera.upperRadiusLimit = radius;

      new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

      try {
        const assetContainer = await BABYLON.LoadAssetContainerAsync("/planet/scene.gltf", scene);
        assetContainer.addAllToScene();
        console.log("Model loaded successfully!", assetContainer);
      } catch (error) {
        console.error("Error loading model:", error);
      }

      return scene;
    };

    createScene().then(scene => {
      engine.runRenderLoop(() => scene.render());
    });

    const handleResize = () => engine.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      engine.dispose();
    };
  }, []);

  return <canvas id="babylon-canvas" className="w-full h-full" style={{ background: "transparent", outline: "none" }} />;
};

export default BabylonEarth;
