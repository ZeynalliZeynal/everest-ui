import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNote2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M13 18V2" />
    <circle cx={9} cy={18} r={4} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19 8a6 6 0 0 1-6-6"
    />
  </svg>
);
export default SvgMusicNote2;
