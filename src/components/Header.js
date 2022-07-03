import React from "react";

const Header = ({ handleToggle }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() => handleToggle((previousDarkMode) => !previousDarkMode)}
      >
        Toggle Button
      </button>
    </div>
  );
};

export default Header;
