import React from "react";
import carpetTexture from "../../assets/textures/сarpet/kovrik-v-vostochnom-stile-oboi-24.png";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const WallCarpet: React.FC = () => {
  const colorMap = useLoader(TextureLoader, carpetTexture);
  return (
    <mesh
      position={[-3.89, 1.7, 0]}
      rotation={[0, Math.PI / 2, 0]}
      receiveShadow
    >
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial map={colorMap} transparent={true} alphaTest={0.5} />
    </mesh>
  );
};

export default WallCarpet;
