import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { checkOBBCollision } from "./checkOBBCollision";
import { COLLISION_OBBS } from "./collisionOBBs";

const ROOM_HALF = 4; // Половина длины стороны квадратной комнаты (комната 8x8 по XZ)
const MARGIN = 0.3; // Запас от стен комнаты, чтобы не заходить слишком близко к границам
const MOVE_SPEED = 0.06; // Скорость перемещения персонажа (камеры) по горизонтали
const PLAYER_RADIUS = 0.23; // Радиус "коллизии" персонажа (приблизительный радиус вокруг камеры)

const JUMP_VELOCITY = 0.12; // Начальная скорость прыжка вверх при нажатии пробела
const GRAVITY = 0.007; // Ускорение свободного падения (уменьшение вертикальной скорости)
const FLOOR_Y = 1.6; // Высота пола (Y-позиция, на которой персонаж считается стоящим на земле)

const keysMap = {
  forward: ["KeyW", "ArrowUp"],
  backward: ["KeyS", "ArrowDown"],
  left: ["KeyA", "ArrowLeft"],
  right: ["KeyD", "ArrowRight"],
  jump: ["Space"],
};

export default function WalkingControls() {
  const { camera } = useThree();
  const pressed = useRef<{ [key: string]: boolean }>({});
  const velocityY = useRef(0);
  const isOnGround = useRef(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      pressed.current[e.code] = true;

      if (keysMap.jump.includes(e.code) && isOnGround.current) {
        velocityY.current = JUMP_VELOCITY;
        isOnGround.current = false;
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      pressed.current[e.code] = false;
    };

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

    const basePosition = camera.position.clone();
    let newX = basePosition.x;
    let newZ = basePosition.z;
    let newY = basePosition.y;

    // Какой будет шаг по каждому направлению
    let dx = 0,
      dz = 0;
    if (forward || backward) {
      camera.getWorldDirection(dir);
      dir.y = 0;
      dir.normalize();
      dx += dir.x * MOVE_SPEED * (forward - backward);
      dz += dir.z * MOVE_SPEED * (forward - backward);
    }
    if (left || right) {
      camera.getWorldDirection(dir);
      dir.y = 0;
      dir.normalize();
      dir.cross(camera.up);
      dx += dir.x * MOVE_SPEED * (right - left);
      dz += dir.z * MOVE_SPEED * (right - left);
    }

    // Пробуем двигаться по X
    const testX = newX + dx;
    const collisionX = COLLISION_OBBS.some((box) =>
      checkOBBCollision(
        testX,
        basePosition.z,
        box.position[0],
        box.position[2],
        box.halfSize[1],
        box.halfSize[0],
        box.rotationY,
        PLAYER_RADIUS
      )
    );

    if (!collisionX) {
      newX = testX;
    }

    // Пробуем двигаться по Z
    const testZ = newZ + dz;
    const collisionZ = COLLISION_OBBS.some((box) =>
      checkOBBCollision(
        newX,
        testZ,
        box.position[0],
        box.position[2],
        box.halfSize[1],
        box.halfSize[0],
        box.rotationY,
        PLAYER_RADIUS
      )
    );

    if (!collisionZ) {
      newZ = testZ;
    }

    // Прыжок и гравитация
    velocityY.current -= GRAVITY;
    newY += velocityY.current;

    if (newY <= FLOOR_Y) {
      newY = FLOOR_Y;
      velocityY.current = 0;
      isOnGround.current = true;
    } else {
      isOnGround.current = false;
    }

    // Ограничения комнаты
    newX = Math.max(-ROOM_HALF + MARGIN, Math.min(ROOM_HALF - MARGIN, newX));
    newZ = Math.max(-ROOM_HALF + MARGIN, Math.min(ROOM_HALF - MARGIN, newZ));

    camera.position.set(newX, newY, newZ);
  });

  return null;
}
