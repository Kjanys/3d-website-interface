import React from "react";
import { ARMCHAIR_POSITION } from "../../utils/positions";
import InteractiveItem from "./InteractiveItem";

type ArmchairProps = {
  onShowHint?: (activeName: string | null) => void;
  onInteract?: (name: string) => void;
};

const BASE_COLOR = "#a96536";
const ARM_COLOR = "#86502b";
const CUSHION_COLOR = "#ebc69b";
const BACK_COLOR = "#81451b";
const LEG_COLOR = "#3a2320";

const Armchair: React.FC<ArmchairProps> = ({ onInteract, onShowHint }) => (
  <InteractiveItem
    name="armchair"
    onShowHint={onShowHint}
    position={ARMCHAIR_POSITION}
    rotation={[0, -Math.PI / 4, 0]}
    onInteract={() => onInteract?.("armchair")}
  >
    {/* Основание/сиденье */}
    <mesh receiveShadow castShadow position={[0, 0.3, 0.05]}>
      <boxGeometry args={[1.02, 0.38, 1.05]} />
      <meshStandardMaterial color={BASE_COLOR} />
    </mesh>
    {/* Спинка */}
    <mesh receiveShadow castShadow position={[0, 0.95, -0.4]}>
      <boxGeometry args={[1.02, 1.05, 0.32]} />
      <meshStandardMaterial color={BACK_COLOR} />
    </mesh>
    {/* Левый подлокотник */}
    <mesh receiveShadow castShadow position={[-0.58, 0.72, 0.04]}>
      <boxGeometry args={[0.29, 0.75, 1.13]} />
      <meshStandardMaterial color={ARM_COLOR} />
    </mesh>
    {/* Правый подлокотник */}
    <mesh receiveShadow castShadow position={[0.58, 0.72, 0.04]}>
      <boxGeometry args={[0.29, 0.75, 1.13]} />
      <meshStandardMaterial color={ARM_COLOR} />
    </mesh>
    {/* Сиденье-подушка */}
    <mesh receiveShadow castShadow position={[0, 0.53, 0.04]}>
      <boxGeometry args={[0.98, 0.25, 0.92]} />
      <meshStandardMaterial color={CUSHION_COLOR} />
    </mesh>
    {/* 4 ножки */}
    <mesh receiveShadow castShadow position={[-0.45, 0.07, 0.32]}>
      <cylinderGeometry args={[0.07, 0.07, 0.15, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[0.45, 0.07, 0.32]}>
      <cylinderGeometry args={[0.07, 0.07, 0.15, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[-0.45, 0.07, -0.32]}>
      <cylinderGeometry args={[0.07, 0.07, 0.15, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[0.45, 0.07, -0.32]}>
      <cylinderGeometry args={[0.07, 0.07, 0.15, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
  </InteractiveItem>
);

export default Armchair;
