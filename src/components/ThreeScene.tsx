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
import Chandelier from "./scene/Chandelier";
import Battery from "./scene/Battery";
import Armchair from "./scene/Armchair";
import FicusPlant from "./scene/FicusPlant";
import WallCarpet from "./scene/WallCarpet";
import HintOverlay from "./UI/HintOverlay/HintOverlay";

const ThreeScene: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.MainMenu);
  const [showHint, setShowHint] = useState<string | null>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  const handleStart = () => setMode(AppMode.Playing);
  const handleResume = () => setMode(AppMode.Playing);
  const handlePause = () => setMode(AppMode.Pause);

  return (
    <>
      <div ref={canvasWrapperRef} id="canvas-wrapper">
        <Canvas camera={{ position: [0, 1.2, 7], fov: 70 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[-0.3, 3.1, 0]}
            intensity={0.8}
            castShadow
          />
          <Suspense fallback={null}>
            <Room />
            <Sofa onShowHint={setShowHint} />
            <Carpet />
            <Cabinet onShowHint={setShowHint} />
            <TV onShowHint={setShowHint} />
            <Table />
            <Posters onShowHint={setShowHint} />
            <Door />
            <Window />
            <Chandelier />
            <Battery />
            <Armchair onShowHint={setShowHint} />
            <FicusPlant onShowHint={setShowHint} />
            <WallCarpet />
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

      {showHint !== null && mode === AppMode.Playing && (
        <HintOverlay text="E Взаимодействовать" />
      )}

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
