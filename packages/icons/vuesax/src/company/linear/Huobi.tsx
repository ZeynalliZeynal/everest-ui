import * as React from "react";
import type { SVGProps } from "react";
const SvgHuobi = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.2 10s-.2 1-3.2 5c-2.9 3.8 1.3 6.6 1.8 7h.1c.6-.5 8.2-5.3 1.3-12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.8 7.8c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10"
    />
  </svg>
);
export default SvgHuobi;
