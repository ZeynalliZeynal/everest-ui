import * as React from "react";
import type { SVGProps } from "react";
const SvgPaypal = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19 7v.5c-.1 1.5-.8 2.8-1.7 3.7-1.1 1.1-2.6 1.8-4.3 1.8H9.9c-.5 0-.9.4-1 .9l-.8 5.3c-.1.4-.3.7-.7.8H5.2c-.6 0-1.1-.5-1-1.2L6.6 4.5C6.8 3.1 8.1 2 9.5 2H14c2.8 0 5 2.2 5 5Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M21 11c0 1.4-.6 2.6-1.5 3.5S17.4 16 16 16h-2.1c-.5 0-.9.3-1 .8l-.7 4.3c-.1.5-.5.8-1 .8h-3c-.6 0-1.1-.6-1-1.2l.2-.7c.4-.1.7-.4.7-.8l.8-5.3c.1-.5.5-.9 1-.9H13c1.7 0 3.2-.7 4.2-1.8 1-1 1.6-2.3 1.7-3.7 1.3.7 2.1 2 2.1 3.5Z"
    />
  </svg>
);
export default SvgPaypal;
