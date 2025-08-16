import React from "react";
import InteractiveItem from "./InteractiveItem";

type PostersProps = {
  onInteract?: (name: string) => void;
};

const Posters: React.FC<PostersProps> = ({ onInteract }) => (
  <>
    <InteractiveItem
      position={[-5.8, 2.5, -3.2]}
      rotation={[0, Math.PI / 2, 0]}
      onInteract={() => onInteract?.("poster1")}
    >
      <mesh>
        <planeGeometry args={[0.7, 1]} />
        <meshStandardMaterial color="#f5ca73" />
      </mesh>
    </InteractiveItem>
    <InteractiveItem
      position={[-5.8, 1.2, -2.1]}
      rotation={[0, Math.PI / 2, 0]}
      onInteract={() => onInteract?.("poster2")}
    >
      <mesh>
        <planeGeometry args={[0.7, 1]} />
        <meshStandardMaterial color="#7c9acf" />
      </mesh>
    </InteractiveItem>
  </>
);

export default Posters;
