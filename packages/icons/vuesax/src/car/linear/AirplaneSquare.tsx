import * as React from "react";
import type { SVGProps } from "react";
const SvgAirplaneSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.86 19 1.68-1.42c.25-.21.67-.21.93 0L14.14 19c.39.2.87 0 1.01-.42l.32-.96c.08-.23 0-.57-.17-.74l-1.64-1.65a.83.83 0 0 1-.21-.51v-1.85c0-.42.31-.62.7-.46l3.35 1.44c.55.24 1.01-.06 1.01-.66v-.93c0-.48-.36-1.04-.81-1.23l-3.94-1.7a.53.53 0 0 1-.3-.46V6.8c0-.68-.5-1.48-1.1-1.79a.76.76 0 0 0-.69 0c-.61.3-1.1 1.11-1.1 1.79v2.07c0 .18-.14.39-.3.46l-3.94 1.7c-.44.19-.81.75-.81 1.23v.93c0 .6.45.9 1.01.66l3.35-1.44c.38-.17.7.04.7.46v1.85c0 .17-.1.4-.21.51L8.7 16.87c-.17.17-.25.51-.17.74l.32.96c.14.43.61.63 1.01.43"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
    />
  </svg>
);
export default SvgAirplaneSquare;
