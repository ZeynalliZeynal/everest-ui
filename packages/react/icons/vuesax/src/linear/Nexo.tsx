import * as React from "react";
import type { SVGProps } from "react";
const SvgNexo = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m12 6 5-3 5 3v12l-5 3-10-6V9l10 6V9z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 6 7 3 2 6v12l5 3 4.7-3.13"
    />
  </svg>
);
export default SvgNexo;
