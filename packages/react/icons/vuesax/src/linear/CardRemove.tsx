import * as React from "react";
import type { SVGProps } from "react";
const SvgCardRemove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.898 10.03h20"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.458 20.53h-5.11c-3.55 0-4.45-.88-4.45-4.39V7.92c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17.898 22.03a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18.97 19.15l-2.11-2.12M18.948 17.06l-2.12 2.11M5.898 16.03h4"
    />
  </svg>
);
export default SvgCardRemove;
