import * as React from "react";
import type { SVGProps } from "react";
const SvgMirrorStand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 9.5V19a3 3 0 0 1-.6 1.8L3.5 22M19 9.5V19a3 3 0 0 0 .6 1.8l.9 1.2"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M18 9.5c0 4.142-2.686 7.5-6 7.5s-6-3.358-6-7.5S8.686 2 12 2s6 3.358 6 7.5ZM5 20h14"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 5.256c.96.51 1.697 1.732 1.926 3.244"
    />
  </svg>
);
export default SvgMirrorStand;
