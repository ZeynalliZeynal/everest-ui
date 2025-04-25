import * as React from "react";
import type { SVGProps } from "react";
const SvgCall = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m4.76 3.662.138-.135a2 2 0 0 1 2.706 0c.031.029.067.064.137.135L9.2 5.12a2.76 2.76 0 0 1 .578 3.053 2.76 2.76 0 0 0 .578 3.053l2.397 2.397a2.76 2.76 0 0 0 3.053.578 2.76 2.76 0 0 1 3.053.578l1.458 1.459c.07.07.106.106.135.137a2 2 0 0 1 0 2.706c-.029.031-.064.067-.135.137l-.886.887a2.99 2.99 0 0 1-2.759.803 17.91 17.91 0 0 1-13.6-13.601 2.99 2.99 0 0 1 .803-2.759z"
    />
  </svg>
);
export default SvgCall;
