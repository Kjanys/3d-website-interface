/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import InteractiveItem from "./InteractiveItem";

type FicusPlantProps = {
  onShowHint?: (activeName: string | null) => void;
  onInteract?: (name: string) => void;
};

const SCALE = 1.8;

const SOIL_COLOR = "#36281f";
const POT_COLOR = "#855d32";
const POT_RIM_COLOR = "#a2784e";
const TRUNK_COLOR = "#957146";
const BRANCH_COLOR = "#715735";
const LEAF_COLORS = ["#347b36", "#2d5b22", "#45944c", "#216a34", "#446d4a"];

// Массив листьев, увеличен по позициям и размерам
const LEAVES = [
  { pos: [0.13, 0.58, 0.11], scl: [0.17, 0.045, 0.08], rot: [0.28, 0.38, 0] },
  {
    pos: [0.07, 0.73, -0.02],
    scl: [0.15, 0.04, 0.09],
    rot: [0.19, -0.25, 0.12],
  },
  {
    pos: [-0.12, 0.63, 0.04],
    scl: [0.13, 0.035, 0.09],
    rot: [-0.23, 0.2, -0.19],
  },
  { pos: [0.14, 0.81, -0.02], scl: [0.11, 0.028, 0.07], rot: [0.2, 0.1, 0.06] },
  {
    pos: [-0.05, 0.89, 0.05],
    scl: [0.095, 0.024, 0.053],
    rot: [0.12, -0.1, -0.36],
  },
  {
    pos: [0, 0.6, -0.15],
    scl: [0.07, 0.022, 0.048],
    rot: [-0.15, 0.23, -0.17],
  },
  {
    pos: [0.05, 0.81, -0.14],
    scl: [0.09, 0.028, 0.04],
    rot: [-0.22, 0.06, 0.18],
  },
].map((leaf) => ({
  ...leaf,
  pos: leaf.pos.map((x) => x * SCALE),
  scl: leaf.scl.map((x) => x * SCALE),
}));

const FicusPlant: React.FC<FicusPlantProps> = ({ onInteract, onShowHint }) => (
  <InteractiveItem
    onShowHint={onShowHint}
    position={[3.5, 0.15 * SCALE, 1.5]} // Горшок встанет ниже, так как всё стало выше
    onInteract={() => onInteract?.("ficus")}
    name={"ficus"}
  >
    {/* Горшок с каёмкой */}
    <mesh receiveShadow castShadow>
      <cylinderGeometry args={[0.22 * SCALE, 0.18 * SCALE, 0.18 * SCALE, 18]} />
      <meshStandardMaterial color={POT_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[0, 0.095 * SCALE, 0]}>
      <cylinderGeometry
        args={[0.17 * SCALE, 0.21 * SCALE, 0.025 * SCALE, 20]}
      />
      <meshStandardMaterial color={POT_RIM_COLOR} />
    </mesh>
    {/* Земля */}
    <mesh receiveShadow castShadow position={[0, 0.098 * SCALE, 0]}>
      <cylinderGeometry
        args={[0.166 * SCALE, 0.198 * SCALE, 0.02 * SCALE, 18]}
      />
      <meshStandardMaterial color={SOIL_COLOR} />
    </mesh>
    {/* Ствол */}
    <mesh receiveShadow castShadow position={[0, 0.24 * SCALE, 0]}>
      <cylinderGeometry
        args={[0.048 * SCALE, 0.058 * SCALE, 0.36 * SCALE, 15]}
      />
      <meshStandardMaterial color={TRUNK_COLOR} />
    </mesh>
    {/* Ветви */}
    <mesh
      receiveShadow
      castShadow
      position={[0.037 * SCALE, 0.43 * SCALE, 0.02 * SCALE]}
      rotation={[0.2, 0.15, 0.05]}
    >
      <cylinderGeometry
        args={[0.025 * SCALE, 0.034 * SCALE, 0.28 * SCALE, 13]}
      />
      <meshStandardMaterial color={BRANCH_COLOR} />
    </mesh>
    <mesh
      receiveShadow
      castShadow
      position={[-0.022 * SCALE, 0.41 * SCALE, -0.043 * SCALE]}
      rotation={[-0.3, -0.18, -0.09]}
    >
      <cylinderGeometry
        args={[0.02 * SCALE, 0.034 * SCALE, 0.43 * SCALE, 12]}
      />
      <meshStandardMaterial color={BRANCH_COLOR} />
    </mesh>
    {/* "Шары" листьев */}
    <mesh
      receiveShadow
      castShadow
      position={[0.13 * SCALE, 0.61 * SCALE, 0.05 * SCALE]}
    >
      <sphereGeometry args={[0.14 * SCALE, 18, 14]} />
      <meshStandardMaterial color="#3e8f51" />
    </mesh>
    <mesh
      receiveShadow
      castShadow
      position={[-0.04 * SCALE, 0.88 * SCALE, 0.03 * SCALE]}
    >
      <sphereGeometry args={[0.1 * SCALE, 18, 14]} />
      <meshStandardMaterial color="#32803e" />
    </mesh>
    <mesh
      receiveShadow
      castShadow
      position={[0.04 * SCALE, 0.7 * SCALE, -0.1 * SCALE]}
    >
      <sphereGeometry args={[0.087 * SCALE, 16, 12]} />
      <meshStandardMaterial color="#2b7334" />
    </mesh>
    {/* Индивидуальные листья */}
    {LEAVES.map((leaf, i) => (
      <mesh
        receiveShadow
        castShadow
        key={i}
        position={leaf.pos as any}
        rotation={leaf.rot as any}
        scale={leaf.scl as any}
      >
        <sphereGeometry args={[1, 10, 7, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={LEAF_COLORS[i % LEAF_COLORS.length]} />
      </mesh>
    ))}
  </InteractiveItem>
);

export default FicusPlant;
