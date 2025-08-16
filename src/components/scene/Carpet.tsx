import React from "react";
import InteractiveItem from "./InteractiveItem";

type CarpetProps = {
  onInteract?: (name: string) => void;
};

const Carpet: React.FC<CarpetProps> = ({ onInteract }) => (
  <InteractiveItem
    position={[-3.5, 1.45, -3.225]}
    rotation={[-Math.PI / 2.05, 0, 0]}
    onInteract={() => onInteract?.("carpet")}
  >
    <mesh>
      <planeGeometry args={[2, 1.1]} />
      <meshStandardMaterial color="#822e26" />
    </mesh>
  </InteractiveItem>
);

export default Carpet;
