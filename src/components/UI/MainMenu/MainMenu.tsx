import React from "react";
import { AppMode } from "../../../types/AppMode";
import "./MainMenu.css";

type MainMenuProps = {
  mode: AppMode;
  onStart?: () => void;
  onResume?: () => void;
  visible?: boolean;
};

const MainMenu: React.FC<MainMenuProps> = ({
  mode,
  onStart,
  onResume,
  visible = true,
}) => {
  if (!visible || mode === AppMode.Playing) return null;

  return (
    <div className="main-menu-overlay">
      <h1 className="main-menu-title">
        {mode === AppMode.Pause ? "Пауза" : "Комната"}
      </h1>

      {mode === AppMode.MainMenu && (
        <button id="start-btn" className="main-menu-button" onClick={onStart}>
          ▶ Запуск
        </button>
      )}

      {mode === AppMode.Pause && (
        <button className="main-menu-button" onClick={onResume} id="resume-btn">
          Продолжить
        </button>
      )}
    </div>
  );
};

export default MainMenu;
