import * as React from "react";
import type { SVGProps } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 15.29V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76-.01-5-2.25-5-5.01"
    />
  </svg>
);
export default SvgCrown;
