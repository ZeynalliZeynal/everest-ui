import * as React from "react";
import type { SVGProps } from "react";
const SvgGlass = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M8.16 22c-4.18 0-5.02-2.53-3.66-5.61l4.25-9.65h-.3a2.374 2.374 0 0 1-2.38-2.37C6.07 3.07 7.13 2 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.84 1.38.63 2.25-.27 1.08-1.31 1.79-2.42 1.79h-.16l4.22 9.66c1.35 3.08.47 5.6-3.67 5.6z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.94 13.12S9 13 12 14s5.83-.89 5.83-.89"
    />
  </svg>
);
export default SvgGlass;
