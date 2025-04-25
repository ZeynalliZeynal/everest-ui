import * as React from "react";
import type { SVGProps } from "react";
const SvgReel2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 22h10" />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
    />
    <path
      fill="#000"
      d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    />
  </svg>
);
export default SvgReel2;
