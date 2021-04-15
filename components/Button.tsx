import React from "react";

interface Props {
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<Props> = ({ children, disabled, style, type }) => {
  return (
    <button
      className={disabled ? "disabled" : null}
      style={style}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
