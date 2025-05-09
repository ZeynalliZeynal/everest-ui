import * as React from "react";
import type { SVGProps } from "react";
const SvgPallete2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12.026c0 5.146 3.867 9.387 8.847 9.96.735.085 1.447-.228 1.97-.753a1.68 1.68 0 0 0 0-2.372c-.523-.525-.95-1.307-.555-1.934 1.576-2.508 9.738 3.251 9.738-4.9C22 6.488 17.523 2 12 2S2 6.489 2 12.026Z"
    />
    <circle cx={17.5} cy={11.5} r={0.75} stroke="#000" strokeWidth={1.5} />
    <circle cx={6.5} cy={11.5} r={0.75} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M9.585 6.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM14.5 6.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
    />
  </svg>
);
export default SvgPallete2;
