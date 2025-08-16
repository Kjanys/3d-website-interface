import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const MOVE_SPEED = 0.08; // Медленнее движение

const keysMap = {
  forward: ["KeyW", "ArrowUp"],
  backward: ["KeyS", "ArrowDown"],
  left: ["KeyA", "ArrowLeft"],
  right: ["KeyD", "ArrowRight"],
};

export default function WalkingControls() {
  const { camera } = useThree();
  const pressed = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) =>
      (pressed.current[e.code] = true);
    const handleKeyUp = (e: KeyboardEvent) => (pressed.current[e.code] = false);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const dir = new THREE.Vector3();
    const forward = keysMap.forward.some((k) => pressed.current[k]) ? 1 : 0;
    const backward = keysMap.backward.some((k) => pressed.current[k]) ? 1 : 0;
    const left = keysMap.left.some((k) => pressed.current[k]) ? 1 : 0;
    const right = keysMap.right.some((k) => pressed.current[k]) ? 1 : 0;

    // Вперёд/назад
    if (forward || backward) {
      camera.getWorldDirection(dir);
      dir.y = 0;
      dir.normalize();
      camera.position.addScaledVector(dir, MOVE_SPEED * (forward - backward));
    }

    // Влево/вправо (исправлено направление)
    if (left || right) {
      camera.getWorldDirection(dir);
      dir.y = 0;
      dir.normalize();
      dir.cross(camera.up); // Влево
      camera.position.addScaledVector(dir, MOVE_SPEED * (right - left));
    }

    // Ограничения комнаты 12×12
    camera.position.x = Math.max(Math.min(camera.position.x, 5.5), -5.5);
    camera.position.z = Math.max(Math.min(camera.position.z, 5.5), -5.5);
    camera.position.y = 1.2; // Рост
  });

  return null;
}
