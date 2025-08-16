import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import MainMenu from "./UI/MainMenu/MainMenu";
import Crosshair from "./UI/Crosshair/Crosshair";
import { AppMode } from "../types/AppMode";
import WalkingControls from "./controls/WalkingControls";
import Cabinet from "./scene/Cabinet";
import Carpet from "./scene/Carpet";
import Door from "./scene/Door";
import Posters from "./scene/Posters";
import Room from "./scene/Room";
import Sofa from "./scene/Sofa";
import TV from "./scene/TV";
import Table from "./scene/Table";
import Window from "./scene/Window";
import "./ThreeScene.css";

const ThreeScene: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.MainMenu);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  const handleStart = () => setMode(AppMode.Playing);
  const handleResume = () => setMode(AppMode.Playing);
  const handlePause = () => setMode(AppMode.Pause);

  return (
    <>
      <div ref={canvasWrapperRef} id="canvas-wrapper">
        <Canvas camera={{ position: [0, 1.2, 7], fov: 60 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 8, 5]} intensity={1.1} castShadow />
          <Suspense fallback={null}>
            <Room />
            <Sofa />
            <Carpet />
            <Cabinet />
            <TV />
            <Table />
            <Posters />
            <Door />
            <Window />
          </Suspense>
          <PointerLockControls
            pointerSpeed={0.3}
            onLock={handleResume}
            onUnlock={handlePause}
            selector={
              mode === AppMode.MainMenu
                ? "#start-btn"
                : mode === AppMode.Pause
                ? "#resume-btn"
                : undefined
            }
          />
          <WalkingControls />
        </Canvas>
      </div>

      <MainMenu
        mode={mode}
        onStart={handleStart}
        onResume={handleResume}
        visible={mode !== AppMode.Playing}
      />

      {mode === AppMode.Playing && <Crosshair />}
    </>
  );
};

export default ThreeScene;
