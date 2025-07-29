import React from "react";
import { ButtonProps } from "../../interfaces"; // ✅ Correct relative path

// Background color classes map
const bgColors: Record<NonNullable<ButtonProps["buttonBackgroundColor"]>, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
};

// ✅ Functional component
const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor, buttonSize, action }) => {
  const backgroundColorClass = buttonBackgroundColor ? bgColors[buttonBackgroundColor] : "bg-blue-500";

  const sizeClass = buttonSize === "large" ? "text-lg py-3 px-6" : buttonSize === "small" ? "text-sm py-1 px-3" : "py-2 px-4";

  return (
    <button
      onClick={action}
      className={`${backgroundColorClass} ${sizeClass} text-white font-semibold rounded-lg hover:opacity-80 transition duration-300`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
