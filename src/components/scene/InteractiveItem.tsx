import React, { useEffect, useState, type JSX } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { COLLISION_OBBS } from "../controls/collisionOBBs";

type CollisionOBB = {
  name: string;
  position: [number, number, number];
  halfSize: number[];
  rotationY: number;
  height: number;
};

type InteractiveItemProps = {
  children: React.ReactNode;
  name: string;
  onInteract?: () => void;
  onShowHint?: (activeName: string | null) => void;
} & JSX.IntrinsicElements["group"];

const HIGHLIGHT_DISTANCE = 3.0;

const checkOBBLook = (
  camPos: THREE.Vector3,
  rayDir: THREE.Vector3,
  obb: CollisionOBB
): boolean => {
  const matrix = new THREE.Matrix4()
    .makeRotationY(obb.rotationY)
    .setPosition(new THREE.Vector3(...obb.position));
  const invMatrix = matrix.clone().invert();

  const originLocal = camPos.clone().applyMatrix4(invMatrix);
  const dirLocal = rayDir.clone().transformDirection(invMatrix);

  const min = new THREE.Vector3(
    -obb.halfSize[0],
    -obb.height / 2,
    -obb.halfSize[1]
  );
  const max = new THREE.Vector3(
    obb.halfSize[0],
    obb.height / 2,
    obb.halfSize[1]
  );
  const box = new THREE.Box3(min, max);

  // Вернёт точку попадания или null
  return (
    new THREE.Ray(originLocal, dirLocal).intersectBox(
      box,
      new THREE.Vector3()
    ) !== null
  );
};

const InteractiveItem: React.FC<InteractiveItemProps> = ({
  children,
  name,
  onInteract,
  onShowHint,
  ...props
}) => {
  const { camera } = useThree();
  const [canInteract, setCanInteract] = useState(false);
  const lastHintName = React.useRef<string | null>(null);
  const obb = COLLISION_OBBS.find((box) => box.name === name);

  useFrame(() => {
    if (!obb) {
      setCanInteract(false);
      if (onShowHint && lastHintName.current !== null) {
        onShowHint(null);
        lastHintName.current = null;
      }
      return;
    }

    const camPos = camera.position.clone();
    const dist = camPos.distanceTo(new THREE.Vector3(...obb.position));
    if (dist > HIGHLIGHT_DISTANCE) {
      setCanInteract(false);
      if (onShowHint && lastHintName.current !== null) {
        onShowHint(null);
        lastHintName.current = null;
      }
      return;
    }

    // Центральный луч камеры
    const rayDir = new THREE.Vector3(0, 0, -1)
      .applyQuaternion(camera.quaternion)
      .normalize();

    // Проверка попадания в OBB
    const aimed = checkOBBLook(camPos, rayDir, obb);

    setCanInteract(aimed);

    if (onShowHint) {
      if (aimed && lastHintName.current !== name) {
        onShowHint(name);
        lastHintName.current = name;
      } else if (!aimed && lastHintName.current !== null) {
        onShowHint(null);
        lastHintName.current = null;
      }
    }
  });

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (canInteract && (e.key === "e" || e.key === "E")) {
        e.preventDefault();
        console.log(`Взаимодействие с объектом: ${name}`);
        if (onInteract) onInteract();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [canInteract, name, onInteract]);

  return <group {...props}>{children}</group>;
};

export default InteractiveItem;
