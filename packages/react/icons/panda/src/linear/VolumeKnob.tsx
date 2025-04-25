import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeKnob = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={5} stroke="#000" strokeWidth={1.5} />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 7v4" />
    <path
      fill="#000"
      d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M3.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M6.697 5.282a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414M18.718 17.304a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414M18.718 6.696a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414M6.697 18.718a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414"
    />
  </svg>
);
export default SvgVolumeKnob;
