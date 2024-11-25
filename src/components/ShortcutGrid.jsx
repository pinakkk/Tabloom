import React from "react";

const ShortcutGrid = () => {
  const shortcuts = ["Google", "YouTube", "GitHub", "Reddit"]; // Example

  return (
    <div className="shortcut-grid">
      {shortcuts.map((shortcut, index) => (
        <button key={index} className="shortcut-button">
          {shortcut}
        </button>
      ))}
    </div>
  );
};

export default ShortcutGrid;

