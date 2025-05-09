import * as React from "react";
import type { SVGProps } from "react";
const SvgPasswordMinimalisticInput = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4h-2C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20"
    />
    <path
      fill="#000"
      d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M15 2v20" />
  </svg>
);
export default SvgPasswordMinimalisticInput;
