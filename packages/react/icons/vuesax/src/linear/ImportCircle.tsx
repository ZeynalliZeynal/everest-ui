import * as React from "react";
import type { SVGProps } from "react";
const SvgImportCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.32 11.68 2.56 2.56 2.56-2.56M11.88 4v10.17"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20 12.18c0 4.42-3 8-8 8s-8-3.58-8-8"
    />
  </svg>
);
export default SvgImportCircle;
