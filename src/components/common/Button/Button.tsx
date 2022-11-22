import React, { ReactNode } from "react";
import classNames from "classnames";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
  color: "primary" | "dark";
}

export const Button: React.FC<ButtonProps> = ({ children, color }) => {
  return (
    <button
      className={classNames(
        "watchit-button",
        {
          "text-white bg-black border-white": color === "dark"
        },
        {
          "text-black bg-site-primary border-black": color === "primary"
        }
      )}>
      {children}
    </button>
  );
};
