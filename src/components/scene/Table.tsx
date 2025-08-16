import React from "react";
import InteractiveItem from "./InteractiveItem";

type TableProps = {
  onInteract?: (name: string) => void;
};

const Table: React.FC<TableProps> = ({ onInteract }) => (
  <InteractiveItem
    position={[-4.7, 0.4, -2.2]}
    onInteract={() => onInteract?.("table")}
  >
    <mesh>
      <boxGeometry args={[1.0, 0.25, 0.7]} />
      <meshStandardMaterial color="#957c6a" />
    </mesh>
  </InteractiveItem>
);

export default Table;
