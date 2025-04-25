import * as React from "react";
import type { SVGProps } from "react";
const SvgFullScreenCircle = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M17.998 9.997c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6M17.998 14c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"
    />
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgFullScreenCircle;
