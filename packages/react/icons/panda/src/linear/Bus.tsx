import * as React from "react";
import type { SVGProps } from "react";
const SvgBus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 13h16M15.5 16H17M7 16h1.5M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1M18 19.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.5 5h-15"
    />
  </svg>
);
export default SvgBus;
