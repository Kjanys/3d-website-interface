import React from "react";

const Room: React.FC = () => (
  <group>
    {/* Пол */}
    <mesh receiveShadow position={[0, 0, 0]}>
      <boxGeometry args={[12, 0.2, 12]} />
      <meshStandardMaterial color="#b08d63" />
    </mesh>
    {/* Потолок */}
    <mesh receiveShadow position={[0, 4, 0]}>
      <boxGeometry args={[12, 0.2, 12]} />
      <meshStandardMaterial color="#beb1a0" />
    </mesh>
    {/* Задняя стена */}
    <mesh receiveShadow position={[0, 2, -6]}>
      <boxGeometry args={[12, 4, 0.2]} />
      <meshStandardMaterial color="#cac2b5" />
    </mesh>
    {/* Передняя стена с окном */}
    <mesh receiveShadow position={[0, 2, 6]}>
      <boxGeometry args={[12, 4, 0.2]} />
      <meshStandardMaterial color="#cac2b5" />
    </mesh>
    {/* Левая стена */}
    <mesh receiveShadow position={[-6, 2, 0]}>
      <boxGeometry args={[0.2, 4, 12]} />
      <meshStandardMaterial color="#dec6ae" />
    </mesh>
    {/* Правая стена */}
    <mesh receiveShadow position={[6, 2, 0]}>
      <boxGeometry args={[0.2, 4, 12]} />
      <meshStandardMaterial color="#dec6ae" />
    </mesh>
  </group>
);

export default Room;
