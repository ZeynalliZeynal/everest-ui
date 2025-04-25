import * as React from "react";
import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      d="M13 5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM5 11.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zM9 17.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"
    />
  </svg>
);
export default SvgMenu;
