import * as React from "react";
import type { SVGProps } from "react";
const SvgDent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 18.1c-.7 0-1.3-.6-1.3-1.3V7.2c0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3v9.7c0 .7-.6 1.2-1.3 1.2Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.7 8.9c.3-.6 1.1-.8 1.8-.5l8.4 4.8c.6.4.8 1.2.5 1.8-.4.6-1.2.8-1.8.5l-8.4-4.8c-.7-.3-.9-1.1-.5-1.8Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.7 15.1c-.4-.6-.1-1.4.5-1.8l8.4-4.8c.6-.4 1.4-.1 1.8.5s.1 1.4-.5 1.8l-8.4 4.8c-.7.3-1.5.1-1.8-.5Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);
export default SvgDent;
