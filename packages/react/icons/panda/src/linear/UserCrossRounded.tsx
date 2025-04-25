import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCrossRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={6} r={4} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M14 20.834c-.634.108-1.305.166-2 .166-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936"
    />
    <circle cx={17} cy={18} r={4} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.667 16.667 2.666 2.666m0-2.666-2.666 2.666"
    />
  </svg>
);
export default SvgUserCrossRounded;
