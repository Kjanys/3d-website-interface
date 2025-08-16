import React from "react";
import InteractiveItem from "./InteractiveItem";

type SofaProps = {
  onInteract?: (name: string) => void;
};

const Sofa: React.FC<SofaProps> = ({ onInteract }) => (
  <InteractiveItem
    position={[-3.5, 0.6, -3.8]}
    onInteract={() => onInteract?.("sofa")}
  >
    <mesh>
      <boxGeometry args={[2.2, 1.2, 0.9]} />
      <meshStandardMaterial color="#914e35" />
    </mesh>
  </InteractiveItem>
);

export default Sofa;
