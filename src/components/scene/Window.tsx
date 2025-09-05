import React from "react";

const FRAME_COLOR = "#bcbac2";
const SASH_COLOR = "#e9e9f6";
const GLASS_COLOR = "#c3e0ef";
const HANDLE_COLOR = "#b4a368";

const WIDTH = 2;
const HEIGHT = 1.6;
const DEPTH = 0.08;

const SASH_THICKNESS = 0.05;
const FRAME_THICKNESS = 0.09;

const LEFT_WIDTH = (WIDTH * 2) / 3;
const RIGHT_WIDTH = WIDTH / 3;
const TOP_RIGHT_HEIGHT = HEIGHT / 3;
const BOTTOM_RIGHT_HEIGHT = HEIGHT - TOP_RIGHT_HEIGHT;

const WINDOW_OFFSET = 0.012; // "выступ" стекла

const Window: React.FC = () => (
  <group position={[0, 1.7, -4]}>
    {/* Наружная рама */}
    <mesh>
      <boxGeometry args={[WIDTH, HEIGHT, DEPTH]} />
      <meshStandardMaterial color={FRAME_COLOR} />
    </mesh>
    {/* Ручка — левая створка */}
    <mesh
      position={[
        // размещаем ближе к стыку c правыми створками, чуть ниже центра
        LEFT_WIDTH / 2 - 0.04 - WIDTH / 2 + 0.7, // X: у стыка с правыми створками, чуть не доходит до края
        0, // Y: чуть ниже центра (можно регулировать по вкусу)
        SASH_THICKNESS / 2 + 0.055, // Z: хорошо выступает вперёд
      ]}
    >
      <cylinderGeometry args={[0.011, 0.011, 0.09, 18]} />
      <meshStandardMaterial
        color={HANDLE_COLOR}
        metalness={0.8}
        roughness={0.24}
      />
    </mesh>

    {/* Левая большая створка */}
    <mesh position={[-(WIDTH - LEFT_WIDTH) / 2, 0, 0.01]}>
      <boxGeometry
        args={[
          LEFT_WIDTH - FRAME_THICKNESS,
          HEIGHT - FRAME_THICKNESS * 2,
          SASH_THICKNESS,
        ]}
      />
      <meshStandardMaterial color={SASH_COLOR} />
    </mesh>
    {/* Стекло — левая створка */}
    <mesh
      position={[
        -(WIDTH - LEFT_WIDTH) / 2,
        0,
        SASH_THICKNESS / 2 + WINDOW_OFFSET,
      ]}
    >
      <boxGeometry
        args={[
          LEFT_WIDTH - FRAME_THICKNESS * 2,
          HEIGHT - FRAME_THICKNESS * 3,
          0.012,
        ]}
      />
      <meshStandardMaterial color={GLASS_COLOR} transparent opacity={0.6} />
    </mesh>

    {/* Правая верхняя (маленькая) створка */}
    <mesh
      position={[
        WIDTH / 2 - RIGHT_WIDTH / 2,
        HEIGHT / 2 - TOP_RIGHT_HEIGHT / 2 - FRAME_THICKNESS / 2,
        0.01,
      ]}
    >
      <boxGeometry
        args={[
          RIGHT_WIDTH - FRAME_THICKNESS,
          TOP_RIGHT_HEIGHT - FRAME_THICKNESS,
          SASH_THICKNESS,
        ]}
      />
      <meshStandardMaterial color={SASH_COLOR} />
    </mesh>
    {/* Стекло — правая верхняя створка */}
    <mesh
      position={[
        WIDTH / 2 - RIGHT_WIDTH / 2,
        HEIGHT / 2 - TOP_RIGHT_HEIGHT / 2 - FRAME_THICKNESS / 2,
        SASH_THICKNESS / 2 + WINDOW_OFFSET,
      ]}
    >
      <boxGeometry
        args={[
          RIGHT_WIDTH - FRAME_THICKNESS * 2,
          TOP_RIGHT_HEIGHT - FRAME_THICKNESS * 1.5,
          0.012,
        ]}
      />
      <meshStandardMaterial color={GLASS_COLOR} transparent opacity={0.6} />
    </mesh>
    {/* Ручка — правая верхняя створка */}
    <mesh
      position={[
        WIDTH / 2 - 0.05,
        HEIGHT / 2 - TOP_RIGHT_HEIGHT + 0.2,
        SASH_THICKNESS / 2 + 0.04,
      ]}
    >
      <cylinderGeometry args={[0.011, 0.011, 0.09, 18]} />
      <meshStandardMaterial
        color={HANDLE_COLOR}
        metalness={0.8}
        roughness={0.24}
      />
    </mesh>

    {/* Правая нижняя (большая) створка */}
    <mesh
      position={[
        WIDTH / 2 - RIGHT_WIDTH / 2,
        -HEIGHT / 2 + BOTTOM_RIGHT_HEIGHT / 2 + FRAME_THICKNESS / 2,
        0.01,
      ]}
    >
      <boxGeometry
        args={[
          RIGHT_WIDTH - FRAME_THICKNESS,
          BOTTOM_RIGHT_HEIGHT - FRAME_THICKNESS,
          SASH_THICKNESS,
        ]}
      />
      <meshStandardMaterial color={SASH_COLOR} />
    </mesh>
    {/* Стекло — правая нижняя створка */}
    <mesh
      position={[
        WIDTH / 2 - RIGHT_WIDTH / 2,
        -HEIGHT / 2 + BOTTOM_RIGHT_HEIGHT / 2 + FRAME_THICKNESS / 2,
        SASH_THICKNESS / 2 + WINDOW_OFFSET,
      ]}
    >
      <boxGeometry
        args={[
          RIGHT_WIDTH - FRAME_THICKNESS * 2,
          BOTTOM_RIGHT_HEIGHT - FRAME_THICKNESS * 1.5,
          0.012,
        ]}
      />
      <meshStandardMaterial color={GLASS_COLOR} transparent opacity={0.6} />
    </mesh>
    {/* Ручка — правая нижняя створка */}
    <mesh
      position={[
        WIDTH / 2 - 0.05,
        -HEIGHT / 2 + BOTTOM_RIGHT_HEIGHT - 0.5,
        SASH_THICKNESS / 2 + 0.04,
      ]}
    >
      <cylinderGeometry args={[0.011, 0.011, 0.09, 18]} />
      <meshStandardMaterial
        color={HANDLE_COLOR}
        metalness={0.8}
        roughness={0.24}
      />
    </mesh>

    {/* Вертикальная створка-разделитель по правой кромке большой створки  */}
    <mesh position={[WIDTH / 2 - RIGHT_WIDTH - FRAME_THICKNESS / 2, 0, 0.012]}>
      <boxGeometry
        args={[
          FRAME_THICKNESS / 2,
          HEIGHT - FRAME_THICKNESS * 1.1,
          SASH_THICKNESS + 0.021,
        ]}
      />
      <meshStandardMaterial color={FRAME_COLOR} />
    </mesh>

    {/* Перемычка между верхней и нижней створками справа */}
    <mesh
      position={[
        WIDTH / 2 - RIGHT_WIDTH / 2,
        HEIGHT / 2 - TOP_RIGHT_HEIGHT - FRAME_THICKNESS / 2,
        0.012,
      ]}
    >
      <boxGeometry
        args={[
          RIGHT_WIDTH - FRAME_THICKNESS,
          FRAME_THICKNESS / 1.5,
          SASH_THICKNESS + 0.021,
        ]}
      />
      <meshStandardMaterial color={FRAME_COLOR} />
    </mesh>
  </group>
);

export default Window;
