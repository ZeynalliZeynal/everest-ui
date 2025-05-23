import * as React from "react";
import type { SVGProps } from "react";
const SvgEos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.8 3.4 7.2 7.7c-.1.2-.2.5-.3.7L5.2 17c-.1.6.2 1.3.7 1.6l5.3 3c.4.2 1.1.2 1.5 0l5.3-3c.5-.3.8-1 .7-1.6L17 8.4c0-.2-.2-.5-.3-.7l-3.6-4.3c-.6-.8-1.6-.8-2.3 0"
    />
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m16.8 8.5-4.3 12.2c-.2.4-.8.4-.9 0L7.2 8.5"
    />
  </svg>
);
export default SvgEos;
