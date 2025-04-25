import * as React from "react";
import type { SVGProps } from "react";
const SvgPlanet2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
    <path
      stroke="#000"
      strokeDasharray="3.5 2.5"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.671 6.225c2.102-.415 3.654-.268 4.158.538 1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.516-.823.163-2.178 1.672-3.69"
    />
  </svg>
);
export default SvgPlanet2;
