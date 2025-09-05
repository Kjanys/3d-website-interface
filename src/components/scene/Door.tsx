import React from "react";
import InteractiveItem from "./InteractiveItem";

type DoorProps = {
  onShowHint?: (activeName: string | null) => void;
  onInteract?: (name: string) => void;
};

const DOOR_WIDTH = 0.1;
const DOOR_HEIGHT = 2.2;
const DOOR_DEPTH = 1.1;

const DOOR_COLOR = "#b78555";
const FRAME_COLOR = "#8a603a";
const PANEL_COLOR = "#c7a272";
const HANDLE_COLOR = "#877e5d";

const frameThickness = 0.04;
const panelInset = 0.015;

const Door: React.FC<DoorProps> = ({ onInteract, onShowHint }) => (
  <InteractiveItem
    name={"door"}
    onShowHint={onShowHint}
    position={[-4.04, 1.2, 2.85]}
    rotation={[0, 0, 0]}
    onInteract={() => onInteract?.("door")}
  >
    {/* Коробка (рамка) */}
    <mesh receiveShadow castShadow position={[0, 0, 0]}>
      <boxGeometry
        args={[
          DOOR_WIDTH + frameThickness * 2,
          DOOR_HEIGHT + frameThickness * 2,
          DOOR_DEPTH + frameThickness * 2,
        ]}
      />
      <meshStandardMaterial color={FRAME_COLOR} />
    </mesh>
    {/* Само полотно двери */}
    <mesh receiveShadow castShadow>
      <boxGeometry args={[DOOR_WIDTH, DOOR_HEIGHT, DOOR_DEPTH]} />
      <meshStandardMaterial color={DOOR_COLOR} />
    </mesh>
    {/* Верхняя филенка */}
    <mesh receiveShadow castShadow position={[0.012, 0.45, 0]}>
      <boxGeometry
        args={[DOOR_WIDTH - 2 * panelInset, 0.6, DOOR_DEPTH - 2 * panelInset]}
      />
      <meshStandardMaterial color={PANEL_COLOR} />
    </mesh>
    {/* Нижняя филенка */}
    <mesh receiveShadow castShadow position={[0.012, -0.48, 0]}>
      <boxGeometry
        args={[DOOR_WIDTH - 2 * panelInset, 0.7, DOOR_DEPTH - 2 * panelInset]}
      />
      <meshStandardMaterial color={PANEL_COLOR} />
    </mesh>
    {/* Ручка (круглая) */}
    <mesh receiveShadow castShadow position={[DOOR_WIDTH / 2 + 0.05, 0, 0.34]}>
      <sphereGeometry args={[0.045, 18, 18]} />
      <meshStandardMaterial
        color={HANDLE_COLOR}
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  </InteractiveItem>
);

export default Door;
