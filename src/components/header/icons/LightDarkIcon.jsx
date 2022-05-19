import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/theme-context/theme-context";

export function LightDarkIcon() {
  const { theme, toggleLightDarkTheme } = useTheme();

  return (
    <button
      id="btn-dm"
      className="sm-icon-btn color-dm sm-icon-btn-primary"
      onClick={toggleLightDarkTheme}
    >
      <div className="icon">
        {theme === "light" && (
          <i className="fas fa-moon" title="Switch To Dark Mode"></i>
        )}
        {theme === "dark" && (
          <i className="fas fa-sun" title="Switch To Light Mode"></i>
        )}
      </div>
    </button>
  );
}
