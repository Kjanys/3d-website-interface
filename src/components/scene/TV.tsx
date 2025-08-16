import React from "react";
import InteractiveItem from "./InteractiveItem";

type TVProps = {
  onInteract?: (name: string) => void;
};

const TV: React.FC<TVProps> = ({ onInteract }) => (
  <InteractiveItem
    position={[4.6, 0.6, -2.3]}
    onInteract={() => onInteract?.("tv")}
  >
    <mesh>
      <boxGeometry args={[0.7, 0.6, 0.6]} />
      <meshStandardMaterial color="#2b2523" />
    </mesh>
  </InteractiveItem>
);

export default TV;
