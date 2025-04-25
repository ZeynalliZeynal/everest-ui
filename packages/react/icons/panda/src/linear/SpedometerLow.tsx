import * as React from "react";
import type { SVGProps } from "react";
const SvgSpedometerLow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.778 14.364a3 3 0 0 0-4.242-4.243c-.446.446-.757 1.37-.972 2.346-.32 1.459-.481 2.188.1 2.769.58.58 1.31.42 2.768.1.975-.215 1.9-.527 2.346-.972Z"
    />
  </svg>
);
export default SvgSpedometerLow;
