import * as React from "react";
import type { SVGProps } from "react";
const SvgTrush = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.9 9.05a66 66 0 0 0-6.57-.33c-1.3 0-2.6.07-3.89.2l-1.34.13M9.71 8.39l.14-.86c.1-.62.18-1.09 1.29-1.09h1.72c1.11 0 1.19.49 1.29 1.09l.14.85M16.49 9.13l-.43 6.6c-.07 1.03-.13 1.83-1.96 1.83H9.89c-1.83 0-1.89-.8-1.96-1.83l-.43-6.6"
    />
  </svg>
);
export default SvgTrush;
