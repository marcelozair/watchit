import "./ButtonRouter.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import React, { ReactNode } from "react";

interface ButtonRouterProps {
  children: ReactNode;
  color: "primary" | "dark";
  to: string;
}

export const ButtonRouter: React.FC<ButtonRouterProps> = ({ children, color, to }) => {
  return (
    <Link
      to={to}
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
    </Link>
  );
};
