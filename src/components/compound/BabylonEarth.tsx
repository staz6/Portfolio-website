import React, { useEffect, useRef } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

const BabylonEarth = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found!");
      return;
    }

    const engine = new BABYLON.Engine(canvas, true, { disableWebGL2Support: false });

    const getCameraRadius = () => {
      const width = window.innerWidth;
      if (width >= 1800) return 2.8;
      if (width >= 1700) return 2.9;
      if (width >= 1600) return 3.0;
      if (width >= 1500) return 3.1;
      if (width >= 1400) return 3.3;
      if (width >= 1280) return 3.5;
      return 2.3;
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
        const container = await BABYLON.LoadAssetContainerAsync("/planet/scene.gltf", scene);
        container.addAllToScene();
        console.log("Model loaded successfully!");
      } catch (error) {
        console.error("Error loading model:", error);
      }

      return scene;
    };

    let scene: BABYLON.Scene;

    createScene().then(createdScene => {
      scene = createdScene;
      engine.runRenderLoop(() => {
        if (scene) scene.render();
      });
    });

    const handleResize = () => engine.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      engine.stopRenderLoop();
      scene?.dispose();
      engine.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full xl:ml-10"
      style={{ background: "transparent", outline: "none" }}
    />
  );
};

export default BabylonEarth;
