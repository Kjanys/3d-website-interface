import React from "react";
import InteractiveItem from "./InteractiveItem";
import { CABINET_POSITION } from "../../utils/positions";

type CabinetProps = {
  onShowHint?: (activeName: string | null) => void;
  onInteract?: (name: string) => void;
};

const BODY_COLOR = "#aa8355";
const DOOR_COLOR = "#c7a368";
const EDGE_COLOR = "#846032";
const HANDLE_COLOR = "#212121";

const WIDTH = 0.6; // по X (УЗКАЯ сторона — теперь глубина!)
const HEIGHT = 2.5; // по Y
const DEPTH = 1.5; // по Z (ШИРОКАЯ сторона = фасад)
const DOOR_GAP = 0.001;
const DOOR_THICKNESS = 0.04;
const PANEL_HEIGHT = 0.07;

const doorDepth = (DEPTH - DOOR_GAP) / 2;
const doorHeight = HEIGHT - 2 * PANEL_HEIGHT + 0.01;
const doorX = WIDTH / 2 - DOOR_THICKNESS / 2;

const Cabinet: React.FC<CabinetProps> = ({ onInteract, onShowHint }) => (
  <InteractiveItem
    name="cabinet"
    onShowHint={onShowHint}
    position={CABINET_POSITION}
    onInteract={() => onInteract?.("cabinet")}
  >
    {/* Корпус шкафа */}
    <mesh receiveShadow castShadow>
      <boxGeometry args={[WIDTH, HEIGHT, DEPTH]} />
      <meshStandardMaterial color={BODY_COLOR} />
    </mesh>
    {/* Верхняя панель (шапка) */}
    <mesh
      receiveShadow
      castShadow
      position={[0, (HEIGHT - PANEL_HEIGHT) / 2, 0]}
    >
      <boxGeometry args={[WIDTH + 0.03, PANEL_HEIGHT, DEPTH + 0.04]} />
      <meshStandardMaterial color={EDGE_COLOR} />
    </mesh>
    {/* Нижняя панель (цоколь) */}
    <mesh
      receiveShadow
      castShadow
      position={[0, -(HEIGHT - PANEL_HEIGHT) / 2, 0]}
    >
      <boxGeometry args={[WIDTH + 0.03, PANEL_HEIGHT, DEPTH + 0.04]} />
      <meshStandardMaterial color={EDGE_COLOR} />
    </mesh>
    {/* Левая дверца на боковой (широкой) стороне */}
    <mesh
      receiveShadow
      castShadow
      position={[-doorX - 0.01, 0, -(doorDepth / 2 + DOOR_GAP / 2) - 0.01]}
    >
      <boxGeometry args={[DOOR_THICKNESS, doorHeight, doorDepth]} />
      <meshStandardMaterial color={DOOR_COLOR} />
    </mesh>
    {/* Правая дверца */}
    <mesh
      receiveShadow
      castShadow
      position={[-doorX - 0.01, 0, doorDepth / 2 + DOOR_GAP / 2 + 0.01]}
    >
      <boxGeometry args={[DOOR_THICKNESS, doorHeight, doorDepth]} />
      <meshStandardMaterial color={DOOR_COLOR} />
    </mesh>
    {/* Левая ручка */}
    <mesh
      receiveShadow
      castShadow
      position={[-doorX - 0.03, 0, -(DOOR_GAP / 2) + 0.05]}
    >
      <cylinderGeometry args={[0.011, 0.011, 0.11, 18]} />
      <meshStandardMaterial color={HANDLE_COLOR} />
    </mesh>
    {/* Правая ручка */}
    <mesh
      receiveShadow
      castShadow
      position={[-doorX - 0.03, 0, DOOR_GAP / 2 - 0.05]}
    >
      <cylinderGeometry args={[0.011, 0.011, 0.11, 18]} />
      <meshStandardMaterial color={HANDLE_COLOR} />
    </mesh>
  </InteractiveItem>
);

export default Cabinet;
