import * as React from "react";
import type { SVGProps } from "react";
const SvgVerified = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m16 9-3.464 4.156c-.712.855-1.068 1.282-1.536 1.282s-.824-.427-1.536-1.282L8 11.4M5.595 5.019a2.957 2.957 0 0 0 3.562-2.057c.816-2.86 4.87-2.86 5.686 0a2.957 2.957 0 0 0 3.562 2.057c2.885-.723 4.912 2.787 2.843 4.924a2.957 2.957 0 0 0 0 4.114c2.07 2.137.042 5.647-2.843 4.924a2.957 2.957 0 0 0-3.562 2.057c-.816 2.86-4.87 2.86-5.686 0a2.957 2.957 0 0 0-3.562-2.057c-2.886.723-4.912-2.787-2.843-4.925a2.957 2.957 0 0 0 0-4.113C.682 7.806 2.709 4.296 5.595 5.02Z"
    />
  </svg>
);
export default SvgVerified;
