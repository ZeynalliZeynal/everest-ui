import React from "react";

export const Button = ({ children, className, ...etc }: ButtonProps) => {
  return <button>{children}</button>;
};
