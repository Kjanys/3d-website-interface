import React from "react";

const Window: React.FC = () => (
  <group position={[0, 2, 5.95]}>
    <mesh>
      <boxGeometry args={[2, 1.2, 0.08]} />
      <meshStandardMaterial color="#dfdfdf" />
    </mesh>
    <mesh position={[0, 0, 0.045]}>
      <boxGeometry args={[1.82, 1.05, 0.02]} />
      <meshStandardMaterial color="#bcd9f7" transparent opacity={0.6} />
    </mesh>
  </group>
);

export default Window;
