import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import carpetTexture from "../../assets/textures/сarpet/kovrik-v-vostochnom-stile-oboi-7.png";

const Carpet: React.FC = () => {
  const colorMap = useLoader(TextureLoader, carpetTexture);

  return (
    <mesh
      position={[0, 0.15, 0]}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      receiveShadow
    >
      <planeGeometry args={[3.5, 2.5]} />
      <meshStandardMaterial map={colorMap} transparent={true} alphaTest={0.5} />
    </mesh>
  );
};

export default Carpet;
