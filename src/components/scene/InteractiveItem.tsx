import React, { useState } from "react";
import type { JSX, ReactNode } from "react";

type InteractiveItemProps = {
  children: ReactNode;
  onInteract?: () => void;
} & JSX.IntrinsicElements["group"];

const InteractiveItem: React.FC<InteractiveItemProps> = ({
  children,
  onInteract,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onInteract}
      scale={hovered ? 1.07 : 1}
    >
      {children}
    </group>
  );
};

export default InteractiveItem;
