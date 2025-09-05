import React from "react";

const Chandelier: React.FC = () => (
  <group position={[0, 3, 0]}>
    {/* Полупрозрачный плафон-шар вплотную к потолку, чуть приплюснутый */}
    <mesh position={[0, -0.05, 0]}>
      <sphereGeometry args={[0.2, 24, 24]} />
      <meshStandardMaterial
        color="#fffbe6"
        emissive="#fffad6"
        emissiveIntensity={1.3}
        roughness={0.19}
        metalness={0.05}
        transparent
        opacity={0.94}
      />
    </mesh>
    {/* Декоративное кольцо обнимает шар снизу, чуть отстоит по Y */}
    <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.2, 0.04, 24, 44]} />
      <meshStandardMaterial color="#a7864d" metalness={1} roughness={0.22} />
    </mesh>
    {/* Мягкий свет — деликатно рассеивается в центре комнаты */}
    <pointLight
      position={[0, -0.06, 0]}
      intensity={0.7} // Было почти 2, стало мягко!
      distance={15}
      color="#fffbe9"
      decay={2}
      castShadow
    />
  </group>
);

export default Chandelier;
