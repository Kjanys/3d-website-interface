import React from "react";
import { SOFA_POSITION } from "../../utils/positions";
import InteractiveItem from "./InteractiveItem";

type SofaProps = {
  onShowHint?: (activeName: string | null) => void;
  onInteract?: (name: string) => void;
};

const SOFA_COLOR = "#914e35";
const ARM_COLOR = "#6b3928";
const PILLOW_COLOR = "#e3c9a3";
const PILLOW_SIDE = "#c6a880";
const LEG_COLOR = "#3a2320";
const BACK_COLOR = "#7b4930";

const Sofa: React.FC<SofaProps> = ({ onInteract, onShowHint }) => (
  <InteractiveItem
    name={"sofa"}
    onShowHint={onShowHint}
    position={SOFA_POSITION}
    rotation={[0, Math.PI / 2, 0]}
    onInteract={() => onInteract?.("sofa")}
  >
    {/* Основание (сиденье) */}
    <mesh receiveShadow castShadow position={[0, 0.33, 0]}>
      <boxGeometry args={[2.6, 0.4, 1.36]} />
      <meshStandardMaterial color={SOFA_COLOR} />
    </mesh>
    {/* Спинка */}
    <mesh receiveShadow castShadow position={[0, 0.95, -0.44]}>
      <boxGeometry args={[2.6, 1.0, 0.48]} />
      <meshStandardMaterial color={BACK_COLOR} />
    </mesh>
    {/* Левый подлокотник */}
    <mesh receiveShadow castShadow position={[-1.3, 0.66, 0.1]}>
      <boxGeometry args={[0.35, 0.98, 1.36]} />
      <meshStandardMaterial color={ARM_COLOR} />
    </mesh>
    {/* Правый подлокотник */}
    <mesh receiveShadow castShadow position={[1.3, 0.66, 0.1]}>
      <boxGeometry args={[0.35, 0.98, 1.36]} />
      <meshStandardMaterial color={ARM_COLOR} />
    </mesh>
    {/* Левая декоративная подушка */}
    <mesh receiveShadow castShadow position={[-1.18, 0.99, 0.3]}>
      <boxGeometry args={[0.22, 0.36, 0.75]} />
      <meshStandardMaterial color={PILLOW_SIDE} />
    </mesh>
    {/* Правая декоративная подушка */}
    <mesh receiveShadow castShadow position={[1.18, 0.99, 0.3]}>
      <boxGeometry args={[0.22, 0.36, 0.75]} />
      <meshStandardMaterial color={PILLOW_SIDE} />
    </mesh>
    {/* Центральные три сидушки */}
    <mesh receiveShadow castShadow position={[-0.7, 0.63, 0.18]}>
      <boxGeometry args={[0.78, 0.22, 1.03]} />
      <meshStandardMaterial color={PILLOW_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[0, 0.63, 0.18]}>
      <boxGeometry args={[0.82, 0.22, 1.03]} />
      <meshStandardMaterial color={PILLOW_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[0.7, 0.63, 0.18]}>
      <boxGeometry args={[0.78, 0.22, 1.03]} />
      <meshStandardMaterial color={PILLOW_COLOR} />
    </mesh>
    {/* Ножки (четыре штуки) */}
    <mesh receiveShadow castShadow position={[-1.18, 0.08, 0.57]}>
      <cylinderGeometry args={[0.06, 0.06, 0.16, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[1.18, 0.08, 0.57]}>
      <cylinderGeometry args={[0.06, 0.06, 0.16, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[-1.18, 0.08, -0.57]}>
      <cylinderGeometry args={[0.06, 0.06, 0.16, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[1.18, 0.08, -0.57]}>
      <cylinderGeometry args={[0.06, 0.06, 0.16, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
  </InteractiveItem>
);

export default Sofa;
