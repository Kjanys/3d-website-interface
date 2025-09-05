import React from "react";

const BODY_COLOR = "#eeeeee";
const FIN_COLOR = "#d5d5d5";
const METAL_COLOR = "#bbbbbb";
const PIPE_COLOR = "#b6b6b6";
const VENT_COLOR = "#888888";

const Battery: React.FC = () => (
  <group position={[0, 0.35, -3.8]}>
    {/* Фон прямоугольный (основание батареи) */}
    <mesh receiveShadow castShadow>
      <boxGeometry args={[1.4, 0.33, 0.13]} />
      <meshStandardMaterial
        color={BODY_COLOR}
        metalness={0.35}
        roughness={0.52}
      />
    </mesh>
    {/* 6 округлённых секций радиатора с чередованием оттенка и "шляпками" */}
    {[...Array(6)].map((_, i) => (
      <group key={i} position={[-0.6 + i * 0.24, 0, 0]}>
        {/* Основная "секция" радиатора */}
        <mesh receiveShadow castShadow>
          <cylinderGeometry args={[0.062, 0.062, 0.29, 18]} />
          <meshStandardMaterial color={FIN_COLOR} metalness={0.34} />
        </mesh>
        {/* Крышка сверху */}
        <mesh receiveShadow castShadow position={[0, 0.145, 0]}>
          <sphereGeometry args={[0.062, 12, 7, 0, Math.PI]} />
          <meshStandardMaterial color={FIN_COLOR} metalness={0.32} />
        </mesh>
        {/* Крышка снизу */}
        <mesh receiveShadow castShadow position={[0, -0.145, 0]}>
          <sphereGeometry args={[0.062, 12, 7, 0, Math.PI]} />
          <meshStandardMaterial color={FIN_COLOR} metalness={0.32} />
        </mesh>
      </group>
    ))}
    {/* Клапан сбоку (у нового радиатора — иногда вентиль с ручкой) */}
    <group position={[0.71, 0.01, 0]}>
      {/* Клапан-цилиндр */}
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[0.022, 0.022, 0.09, 14]} />
        <meshStandardMaterial color={METAL_COLOR} metalness={0.44} />
      </mesh>
      {/* Круглая ручка-вентиль */}
      <mesh receiveShadow castShadow position={[0.015, 0, 0]}>
        <sphereGeometry args={[0.023, 14, 8]} />
        <meshStandardMaterial color={VENT_COLOR} />
      </mesh>
    </group>
    {/* Входная трубка с муфтой */}
    <group position={[-0.71, -0.14, 0]}>
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[0.013, 0.013, 0.18, 16]} />
        <meshStandardMaterial color={PIPE_COLOR} />
      </mesh>
      {/* Муфта на трубе */}
      <mesh receiveShadow castShadow position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.017, 0.017, 0.034, 16]} />
        <meshStandardMaterial color={METAL_COLOR} />
      </mesh>
    </group>
    {/* Выходная трубка справа (такая же как входная, симметрично) */}
    <group position={[0.71, -0.14, 0]}>
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[0.013, 0.013, 0.18, 16]} />
        <meshStandardMaterial color={PIPE_COLOR} />
      </mesh>
      <mesh receiveShadow castShadow position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.017, 0.017, 0.034, 16]} />
        <meshStandardMaterial color={METAL_COLOR} />
      </mesh>
    </group>
  </group>
);

export default Battery;
