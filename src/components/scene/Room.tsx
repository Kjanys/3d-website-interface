import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

import aoMap from "../../assets/textures/floor/WoodFloor052_1K-JPG_AmbientOcclusion.jpg";
import colorMap from "../../assets/textures/floor/WoodFloor052_1K-JPG_Color.jpg";
import normalMap from "../../assets/textures/floor/WoodFloor052_1K-JPG_NormalDX.jpg";
import roughnessMap from "../../assets/textures/floor/WoodFloor052_1K-JPG_Roughness.jpg";

const Room: React.FC = () => {
  const [diffMap, roughMap, nrmMap, ambientMap] = useLoader(TextureLoader, [
    colorMap,
    roughnessMap,
    normalMap,
    aoMap,
  ]);

  useEffect(() => {
    [diffMap, roughMap, nrmMap, ambientMap].forEach((texture) => {
      if (texture) {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;
        texture.repeat.set(4, 4); // подбери количество повторов на вкус!
      }
    });
  }, [diffMap, roughMap, nrmMap, ambientMap]);

  return (
    <group>
      {/* Пол */}
      <mesh receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[8, 0.2, 8]} />
        <meshStandardMaterial color="#b08d63" />
      </mesh>
      {/* Верхний слой пола — ПЛОСКОСТЬ с текстурой */}
      <mesh
        receiveShadow
        position={[0, 0.101, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial
          map={diffMap}
          roughnessMap={roughMap}
          normalMap={nrmMap}
          aoMap={ambientMap}
          roughness={1}
          metalness={0}
        />
      </mesh>
      {/* Потолок */}
      <mesh receiveShadow position={[0, 3, 0]}>
        <boxGeometry args={[8, 0.2, 8]} />
        <meshStandardMaterial color="#beb1a0" />
      </mesh>
      {/* Задняя стена с вырезом и перемычками под окно */}
      {/* Левая часть стены */}
      <mesh receiveShadow position={[-2.5, 1.5, -4]}>
        <boxGeometry args={[3, 3, 0.2]} />
        <meshStandardMaterial color="#dec6ae" />
      </mesh>
      {/* Правая часть стены */}
      <mesh receiveShadow position={[2.5, 1.5, -4]}>
        <boxGeometry args={[3, 3, 0.2]} />
        <meshStandardMaterial color="#dec6ae" />
      </mesh>
      {/* Перемычка сверху окна */}
      <mesh receiveShadow position={[0, 2.7, -4]}>
        <boxGeometry args={[2, 0.4, 0.2]} />
        <meshStandardMaterial color="#dec6ae" />
      </mesh>
      {/* Перемычка снизу окна */}
      <mesh receiveShadow position={[0, 0.5, -4]}>
        <boxGeometry args={[2, 0.8, 0.2]} />
        <meshStandardMaterial color="#dec6ae" />
      </mesh>
      {/* Передняя стена */}
      <mesh receiveShadow position={[0, 1.5, 4]}>
        <boxGeometry args={[8, 3, 0.2]} />
        <meshStandardMaterial color="#dec6ae" />
      </mesh>
      {/* Левая стена до двери */}
      <mesh receiveShadow position={[-4, 1.5, -0.8]}>
        <boxGeometry args={[0.2, 3, 6.2]} />
        <meshStandardMaterial color="#dec6ae" />
      </mesh>
      {/* Перемычка над дверью */}
      <mesh receiveShadow position={[-4, 2.6, 2.85]}>
        <boxGeometry args={[0.2, 0.6, 1.1]} />
        <meshStandardMaterial color="#dec6ae" />
      </mesh>
      {/* Короткий кусочек стены после двери */}
      <mesh receiveShadow position={[-4, 1.5, 3.7]}>
        <boxGeometry args={[0.2, 3, 0.6]} />
        <meshStandardMaterial color="#dec6ae" />
      </mesh>
      {/* Правая стена */}
      <mesh receiveShadow position={[4, 1.5, 0]}>
        <boxGeometry args={[0.2, 3, 8]} />
        <meshStandardMaterial color="#dec6ae" />
      </mesh>
    </group>
  );
};

export default Room;
