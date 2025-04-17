import * as React from "react";
import type { SVGProps } from "react";
const SvgNote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 8.25V18c0 3-1.79 4-4 4H8c-2.21 0-4-1-4-4V8.25c0-3.25 1.79-4 4-4 0 .62.25 1.18.66 1.59s.97.66 1.59.66h3.5C14.99 6.5 16 5.49 16 4.25c2.21 0 4 .75 4 4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 4.25c0 1.24-1.01 2.25-2.25 2.25h-3.5c-.62 0-1.18-.25-1.59-.66S8 4.87 8 4.25C8 3.01 9.01 2 10.25 2h3.5c.62 0 1.18.25 1.59.66s.66.97.66 1.59M8 13h4M8 17h8"
    />
  </svg>
);
export default SvgNote;
