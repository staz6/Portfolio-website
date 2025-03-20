import React, { useEffect } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

const BabylonEarth = () => {
  useEffect(() => {
    const canvas = document.getElementById("babylon-canvas") as HTMLCanvasElement;
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = () => {
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
      
        const camera = new BABYLON.ArcRotateCamera(
            "Camera",
            Math.PI / 4,
            Math.PI / 2.2,
            7, 
            BABYLON.Vector3.Zero(),
            scene
          );
          
      
        camera.attachControl(canvas, true);
        camera.wheelPrecision = 0;
        camera.panningSensibility = 0;
        camera.minZ = 0.1;
        camera.maxZ = 100;
        camera.lowerRadiusLimit = camera.radius;
        camera.upperRadiusLimit = camera.radius;
      
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
      
        BABYLON.SceneLoader.ImportMesh("", "./planet/", "scene.gltf", scene, (meshes) => {
          meshes[0].scaling = new BABYLON.Vector3(2.5, 2.5, 2.5);
        });
      
        return scene;
      };
      
      

    const scene = createScene();
    engine.runRenderLoop(() => scene.render());

    const handleResize = () => engine.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      scene.dispose();
      engine.dispose();
    };
  }, []);

  return <canvas id="babylon-canvas" className="w-full h-full" style={{background: "transparent" , outline: "none" }} />;
};

export default BabylonEarth;
