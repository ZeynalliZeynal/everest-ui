import * as React from "react";
import type { SVGProps } from "react";
const SvgQuitFullScreenCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73M9.998 17.997c-.015-1.706-.11-2.647-.73-3.267S7.707 14.014 6 14M14 6c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267s1.56-.716 3.267-.73"
    />
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgQuitFullScreenCircle;
