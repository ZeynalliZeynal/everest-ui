import * as React from "react";
import type { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.75 3a.75.75 0 0 0-1.5 0v6H9c-.929 0-1.394 0-1.782.062a5 5 0 0 0-4.156 4.156C3 13.607 3 14.07 3 15s0 1.393.062 1.782a5 5 0 0 0 4.156 4.156C7.606 21 8.07 21 9 21h6c.929 0 1.393 0 1.782-.062a5 5 0 0 0 4.156-4.156C21 16.393 21 15.93 21 15s0-1.393-.062-1.782a5 5 0 0 0-4.156-4.156C16.393 9 15.93 9 15 9h-2.25zm0 6h-1.5v6.81c-.323-.327-.706-.809-1.264-1.513l-1.398-1.763a.75.75 0 0 0-1.176.932l1.427 1.799c.533.672.973 1.227 1.367 1.622.404.406.852.742 1.425.834a2.4 2.4 0 0 0 .738 0c.573-.092 1.021-.428 1.425-.834.394-.395.834-.95 1.367-1.622l1.427-1.799a.75.75 0 0 0-1.176-.932l-1.398 1.763c-.558.704-.941 1.186-1.264 1.513z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDownload;
