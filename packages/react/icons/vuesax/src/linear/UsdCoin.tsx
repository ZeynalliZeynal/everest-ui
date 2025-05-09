import * as React from "react";
import type { SVGProps } from "react";
const SvgUsdCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.9 16.9c2.7-2.7 2.7-7.2 0-9.9M7.1 7.1c-2.7 2.7-2.7 7.2 0 9.9"
    />
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.7 13.6c0 .9.7 1.6 1.6 1.6H13c.7 0 1.4-.6 1.4-1.4 0-.9-.4-1.2-.9-1.4l-2.8-1c-.7-.1-1-.4-1-1.2s.6-1.4 1.4-1.4h1.8c.9 0 1.6.7 1.6 1.6M12 7.8v8.4"
    />
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
  </svg>
);
export default SvgUsdCoin;
