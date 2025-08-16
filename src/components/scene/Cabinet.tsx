import React from "react";
import InteractiveItem from "./InteractiveItem";

type CabinetProps = {
  onInteract?: (name: string) => void;
};

const Cabinet: React.FC<CabinetProps> = ({ onInteract }) => (
  <InteractiveItem
    position={[3.7, 1.4, -3.8]}
    onInteract={() => onInteract?.("cabinet")}
  >
    <mesh>
      <boxGeometry args={[1, 2.2, 0.5]} />
      <meshStandardMaterial color="#aa8355" />
    </mesh>
  </InteractiveItem>
);

export default Cabinet;
