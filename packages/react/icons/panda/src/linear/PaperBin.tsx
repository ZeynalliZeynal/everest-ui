import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperBin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M3.034 8.89c-.481-3.204-.721-4.805.176-5.848C4.108 2 5.728 2 8.967 2h6.066c3.24 0 4.859 0 5.757 1.042s.657 2.644.177 5.848l-1.2 8c-.366 2.438-.549 3.656-1.393 4.383S16.298 22 13.833 22h-3.666c-2.465 0-3.697 0-4.541-.727s-1.027-1.945-1.392-4.383z"
    />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 6-4.5 5 7.5 8m3-13L4 16M20 6 7 19m6 0 7.5-8L16 6m-6 0 10 10M4 6l13 13"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 6H3M19 19H5"
    />
  </svg>
);
export default SvgPaperBin;
