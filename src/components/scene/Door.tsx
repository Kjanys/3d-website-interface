import React from "react";
import InteractiveItem from "./InteractiveItem";

type DoorProps = {
  onInteract?: (name: string) => void;
};

const Door: React.FC<DoorProps> = ({ onInteract }) => (
  <InteractiveItem
    position={[-5.8, 1, 1.5]}
    rotation={[0, Math.PI / 2, 0]}
    onInteract={() => onInteract?.("door")}
  >
    <mesh>
      <boxGeometry args={[0.1, 2, 0.8]} />
      <meshStandardMaterial color="#b78555" />
    </mesh>
  </InteractiveItem>
);

export default Door;
