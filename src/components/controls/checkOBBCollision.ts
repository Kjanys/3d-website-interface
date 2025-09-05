// Универсальная функция 2D OBB-коллизии
export function checkOBBCollision(
  camX: number,
  camZ: number,
  objX: number,
  objZ: number,
  halfWidth: number,
  halfDepth: number,
  angleY: number,
  playerRadius: number
): boolean {
  // смещаем точку относительно центра объекта
  const dx = camX - objX;
  const dz = camZ - objZ;
  // поворот точки в локальную систему объекта
  const localX = dx * Math.cos(-angleY) - dz * Math.sin(-angleY);
  const localZ = dx * Math.sin(-angleY) + dz * Math.cos(-angleY);

  return (
    localX + playerRadius > -halfWidth &&
    localX - playerRadius < halfWidth &&
    localZ + playerRadius > -halfDepth &&
    localZ - playerRadius < halfDepth
  );
}
