import * as React from "react";
import type { SVGProps } from "react";
const SvgEthereum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.45 3.05 6.71 7.71c-.85 1.06-.55 2.42.66 3.02l3.73 1.87c.49.24 1.29.24 1.78 0l3.73-1.87c1.21-.61 1.51-1.97.66-3.02l-3.73-4.66c-.84-1.07-2.24-1.07-3.09 0M12 2.3v5.26"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.8 10.71 12 7.56l4.2 3.15M8.77 14.43l1.61.72a4 4 0 0 0 3.25 0l1.61-.72c1.44-.64 2.77 1.1 1.77 2.32l-3.46 4.23c-.85 1.04-2.24 1.04-3.1 0L7 16.75c-1.01-1.22.32-2.96 1.77-2.32"
    />
  </svg>
);
export default SvgEthereum;
