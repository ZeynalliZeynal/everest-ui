import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSpeakRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={10} cy={6} r={4} stroke="#000" strokeWidth={1.5} />
    <ellipse cx={10} cy={17} stroke="#000" strokeWidth={1.5} rx={7} ry={4} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2"
    />
  </svg>
);
export default SvgUserSpeakRounded;
