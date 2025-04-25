import * as React from "react";
import type { SVGProps } from "react";
const SvgFridge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v3c0 3.771 0 5.657-1.172 6.828S15.771 21 12 21s-5.657 0-6.828-1.172S4 16.771 4 13z"
    />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 21v1h-1v-1m-8 0v1H7v-1"
    />
    <path stroke="#000" strokeWidth={1.5} d="M20 11.5H4" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17 7v2M17 14v2"
    />
  </svg>
);
export default SvgFridge;
