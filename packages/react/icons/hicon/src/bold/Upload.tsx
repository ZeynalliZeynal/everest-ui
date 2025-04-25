import * as React from "react";
import type { SVGProps } from "react";
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 17a.75.75 0 0 0 1.5 0V9H15c.929 0 1.393 0 1.782.062a5 5 0 0 1 4.156 4.156C21 13.607 21 14.07 21 15s0 1.393-.062 1.782a5 5 0 0 1-4.156 4.156C16.393 21 15.93 21 15 21H9c-.929 0-1.394 0-1.782-.062a5 5 0 0 1-4.156-4.156C3 16.393 3 15.93 3 15s0-1.393.062-1.782a5 5 0 0 1 4.156-4.156C7.606 9 8.07 9 9 9h2.25zm0-8V4.19c-.323.327-.706.809-1.264 1.513L8.588 7.466a.75.75 0 1 1-1.176-.932L8.84 4.735c.533-.672.973-1.227 1.367-1.622.404-.406.852-.742 1.425-.834a2.3 2.3 0 0 1 .738 0c.573.092 1.021.428 1.425.834.394.395.834.95 1.367 1.622l1.427 1.799a.75.75 0 0 1-1.176.932l-1.398-1.763c-.558-.704-.941-1.186-1.264-1.513V9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUpload;
