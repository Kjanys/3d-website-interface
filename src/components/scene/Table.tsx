import React from "react";
import { TABLE_POSITION } from "../../utils/positions";

const TABLE_COLOR = "#957c6a";
const LEG_COLOR = "#6d5643";

const WIDTH = 1.2;
const HEIGHT = 1.0;
const DEPTH = 1.6;
const TOP_THICKNESS = 0.08;
const LEG_SIZE = 0.13;
const LEG_HEIGHT = HEIGHT - TOP_THICKNESS;

const Table: React.FC = () => (
  <group position={TABLE_POSITION}>
    {/* Столешница: ПРЯМО по самой верхней грани блока */}
    <mesh position={[0, 0, 0]} receiveShadow castShadow>
      <boxGeometry args={[WIDTH, TOP_THICKNESS, DEPTH]} />
      <meshStandardMaterial color={TABLE_COLOR} />
    </mesh>

    {/* Левая передняя ножка */}
    <mesh
      receiveShadow
      castShadow
      position={[
        -(WIDTH / 2 - LEG_SIZE / 2),
        -(LEG_HEIGHT / 2 + TOP_THICKNESS / 2),
        DEPTH / 2 - LEG_SIZE / 2,
      ]}
    >
      <boxGeometry args={[LEG_SIZE, LEG_HEIGHT, LEG_SIZE]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    {/* Правая передняя ножка */}
    <mesh
      receiveShadow
      castShadow
      position={[
        WIDTH / 2 - LEG_SIZE / 2,
        -(LEG_HEIGHT / 2 + TOP_THICKNESS / 2),
        DEPTH / 2 - LEG_SIZE / 2,
      ]}
    >
      <boxGeometry args={[LEG_SIZE, LEG_HEIGHT, LEG_SIZE]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    {/* Левая задняя ножка */}
    <mesh
      receiveShadow
      castShadow
      position={[
        -(WIDTH / 2 - LEG_SIZE / 2),
        -(LEG_HEIGHT / 2 + TOP_THICKNESS / 2),
        -(DEPTH / 2 - LEG_SIZE / 2),
      ]}
    >
      <boxGeometry args={[LEG_SIZE, LEG_HEIGHT, LEG_SIZE]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    {/* Правая задняя ножка */}
    <mesh
      receiveShadow
      castShadow
      position={[
        WIDTH / 2 - LEG_SIZE / 2,
        -(LEG_HEIGHT / 2 + TOP_THICKNESS / 2),
        -(DEPTH / 2 - LEG_SIZE / 2),
      ]}
    >
      <boxGeometry args={[LEG_SIZE, LEG_HEIGHT, LEG_SIZE]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
  </group>
);

export default Table;
