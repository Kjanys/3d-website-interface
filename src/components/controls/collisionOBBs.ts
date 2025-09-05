import {
  ARMCHAIR_POSITION,
  CABINET_POSITION,
  FICUS_POSITION,
  SOFA_POSITION,
  TABLE_POSITION,
  TV_POSITION,
} from "../../utils/positions";

export const COLLISION_OBBS = [
  // Диван (уже был)
  {
    name: "sofa",
    position: SOFA_POSITION, // [x, y, z]
    halfSize: [0.75, 1.75], // after rotation: [width/2, depth/2]
    rotationY: Math.PI / 2,
    height: 1.3,
  },
  // Кресло (уже был)
  {
    name: "armchair",
    position: ARMCHAIR_POSITION,
    halfSize: [0.75, 0.75],
    rotationY: Math.PI / 4,
    height: 1.5,
  },

  // Шкаф
  {
    name: "cabinet",
    position: CABINET_POSITION, // <-- Y=1 (центр меша), как у компонента
    halfSize: [0.75, 0.3], // [0.6 / 2, 1.5 / 2]
    rotationY: 0,
    height: 3, // высота меша (можно использовать для вертикального пересечения, если надо)
  },

  // ТВ-тумба и телевизор (rotationY=0)
  {
    name: "tv-stand",
    position: TV_POSITION,
    halfSize: [0.5, 0.7], // boxGeometry [1.0, _, 1.4], тут по боксам [0.5, 0.7]
    rotationY: 0,
    height: 1.7,
  },

  // Стол
  {
    name: "table",
    position: TABLE_POSITION, // <-- Y=0.6 (центр), как у компонента
    halfSize: [0.7, 0.6], // [1.2 / 2, 1.6 / 2]
    rotationY: 0,
    height: 1, // высота меша
  },

  // Фикус
  {
    name: "ficus",
    position: FICUS_POSITION,
    halfSize: [0.27, 0.3], // цилиндр + листья, берем чуть с запасом
    rotationY: 0,
    height: 1.18,
  },
];
