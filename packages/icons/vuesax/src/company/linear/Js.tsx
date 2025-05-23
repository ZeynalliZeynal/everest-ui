import * as React from "react";
import type { SVGProps } from "react";
const SvgJs = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 9v7.9c0 1.5-1.6 2.5-3 1.7l-2.5-1.4c-.3-.1-.5-.4-.5-.8V7.6c0-.4.2-.7.5-.9l8-4.4c.3-.2.7-.2 1 0l8 4.4c.3.2.5.5.5.9v8.8c0 .4-.2.7-.5.9l-8 4.4c-.3.2-.7.2-1 0L10 21"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 10.8c0-1-.8-1.8-1.7-1.8h-1.8c-1 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7h1.8c1 0 1.7.8 1.7 1.7 0 1-.8 1.7-1.7 1.7h-1.8c-1 0-1.7-.8-1.7-1.7"
    />
  </svg>
);
export default SvgJs;
