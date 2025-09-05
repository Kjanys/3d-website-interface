import React from "react";
import "./HintOverlay.css";

type HintOverlayProps = {
  text?: string;
};

const HintOverlay: React.FC<HintOverlayProps> = ({ text }) => {
  return (
    <div className="hint-overlay">
      <span className="hint-key">E</span>
      <span className="hint-text">
        {text ? text.replace(/^E ?/, "") : "Взаимодействовать"}
      </span>
    </div>
  );
};

export default HintOverlay;
