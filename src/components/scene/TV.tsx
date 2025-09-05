import React from "react";
import InteractiveItem from "./InteractiveItem";

type TVProps = {
  onShowHint?: (activeName: string | null) => void;
  onInteract?: (name: string) => void;
};

const TOP_COLOR = "#b8a36f";
const TUMBA_COLOR = "#936c3c";
const LEG_COLOR = "#5d4a28";

const TV: React.FC<TVProps> = ({ onInteract, onShowHint }) => (
  <group>
    {/* Тумба */}
    {/* Столешница */}
    <mesh receiveShadow castShadow position={[3.5, 1.1, 0]}>
      <boxGeometry args={[0.85, 0.12, 1.25]} />
      <meshStandardMaterial color={TOP_COLOR} />
    </mesh>

    {/* Корпус тумбы */}
    <mesh receiveShadow castShadow position={[3.5, 0.65, 0]}>
      <boxGeometry args={[0.8, 1, 1.2]} />
      <meshStandardMaterial color={TUMBA_COLOR} />
    </mesh>

    {/* Первая полка/ящик (верхний) */}
    <mesh receiveShadow castShadow position={[3.45, 0.85, 0]}>
      <boxGeometry args={[0.74, 0.3, 1.08]} />
      <meshStandardMaterial color={"#cfb87c"} />
    </mesh>
    {/* Ручка верхнего ящика */}
    <mesh
      receiveShadow
      castShadow
      position={[3.07, 0.95, 0.03]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <cylinderGeometry args={[0.019, 0.019, 0.17, 20]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>

    {/* Вторая полка/ящик (нижний) */}
    <mesh receiveShadow castShadow position={[3.45, 0.5, 0]}>
      <boxGeometry args={[0.74, 0.3, 1.08]} />
      <meshStandardMaterial color={"#cfb87c"} />
    </mesh>
    {/* Ручка нижнего ящика */}
    <mesh
      receiveShadow
      castShadow
      position={[3.07, 0.59, 0.03]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <cylinderGeometry args={[0.019, 0.019, 0.17, 20]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>

    {/* Ножки тумбы */}
    <mesh receiveShadow castShadow position={[3.5 - 0.36, 0.1, 0.53]}>
      <cylinderGeometry args={[0.027, 0.027, 0.11, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[3.5 + 0.36, 0.1, 0.53]}>
      <cylinderGeometry args={[0.027, 0.027, 0.11, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[3.5 - 0.36, 0.1, -0.53]}>
      <cylinderGeometry args={[0.027, 0.027, 0.11, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>
    <mesh receiveShadow castShadow position={[3.5 + 0.36, 0.1, -0.53]}>
      <cylinderGeometry args={[0.027, 0.027, 0.11, 14]} />
      <meshStandardMaterial color={LEG_COLOR} />
    </mesh>

    {/* Классический “пузатый” ЭЛТ-телевизор */}
    <InteractiveItem
      name={"tv-stand"}
      onShowHint={onShowHint}
      position={[3.5, 1.44, 0]}
      rotation={[0, Math.PI / 2, 0]}
      onInteract={() => onInteract?.("tv-stand")}
    >
      {/* Основной корпус (большой блок, серый) */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[0.73, 0.56, 0.5]} />
        <meshStandardMaterial color={"#7d7d7d"} />
      </mesh>

      {/* Экран — чуть выпирает, прямоугольник с заметным бликом */}
      <mesh receiveShadow castShadow position={[0, 0, -0.23]}>
        <boxGeometry args={[0.61, 0.39, 0.06]} />
        <meshStandardMaterial color={"rgba(3, 3, 3, 1)"} />
      </mesh>

      {/* Серая рамка вокруг экрана */}
      <mesh receiveShadow castShadow position={[0, 0, -0.24]}>
        <boxGeometry args={[0.65, 0.45, 0.027]} />
        <meshStandardMaterial color={"#444343ff"} />
      </mesh>

      {/* Красная кнопка питания под экраном */}
      <mesh receiveShadow castShadow position={[-0.3, -0.25, -0.24]}>
        <cylinderGeometry args={[0.026, 0.026, 0.022, 18]} />
        <meshStandardMaterial color={"#ee2222"} metalness={0.47} />
      </mesh>

      {/* Антенна (две палки “V” сверху) */}
      <mesh receiveShadow castShadow position={[0, 0.33, 0]}>
        <cylinderGeometry args={[0.007, 0.007, 0.33, 16]} />
        <meshStandardMaterial color={"#cccccc"} roughness={0.25} />
      </mesh>
      <mesh receiveShadow castShadow position={[0, 0.33, 0]}>
        <cylinderGeometry args={[0.007, 0.007, 0.33, 16]} />
        <meshStandardMaterial color={"#cccccc"} roughness={0.25} />
      </mesh>
      {/* "V"-образный угол антенн */}
      <group>
        <mesh
          receiveShadow
          castShadow
          position={[0.09, 0.4, 0]}
          rotation={[0, 0, -Math.PI / 7]}
        >
          <cylinderGeometry args={[0.007, 0.007, 0.25, 14]} />
          <meshStandardMaterial color={"#cccccc"} />
        </mesh>
        <mesh
          receiveShadow
          castShadow
          position={[-0.09, 0.4, 0]}
          rotation={[0, 0, Math.PI / 7]}
        >
          <cylinderGeometry args={[0.007, 0.007, 0.25, 14]} />
          <meshStandardMaterial color={"#cccccc"} />
        </mesh>
      </group>
    </InteractiveItem>
  </group>
);

export default TV;
