import React from "react";
import InteractiveItem from "./InteractiveItem";

import poster1 from "../../assets/textures/posters/poster1.png";
import poster2 from "../../assets/textures/posters/poster2.png";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

type PostersProps = {
  onShowHint?: (activeName: string | null) => void;
  onInteract?: (name: string) => void;
};

const Posters: React.FC<PostersProps> = ({ onInteract, onShowHint }) => {
  const colorMapPoster1 = useLoader(TextureLoader, poster1);
  const colorMapPoster2 = useLoader(TextureLoader, poster2);

  return (
    <>
      {/* Верхний постер ближе к шкафу, но не в самом углу */}
      <InteractiveItem
        name={"poster1"}
        onShowHint={onShowHint}
        position={[1, 1.75, 3.85]} // X=-3.99 (вплотную к стене), Z=-0.8
        rotation={[0, Math.PI / 1, 0]}
        onInteract={() => onInteract?.("poster1")}
      >
        <mesh>
          <planeGeometry args={[0.8, 1.1]} />
          <meshStandardMaterial
            map={colorMapPoster1}
            transparent={true}
            alphaTest={0.5}
          />
        </mesh>
      </InteractiveItem>
      {/* Нижний постер ближе к двери */}
      <InteractiveItem
        name={"poster2"}
        onShowHint={onShowHint}
        position={[-1, 1.6, 3.85]}
        rotation={[0, Math.PI / 1, 0]}
        onInteract={() => onInteract?.("poster2")}
      >
        <mesh>
          <planeGeometry args={[0.8, 1.1]} />
          <meshStandardMaterial
            map={colorMapPoster2}
            transparent={true}
            alphaTest={0.5}
          />
        </mesh>
      </InteractiveItem>
    </>
  );
};

export default Posters;
