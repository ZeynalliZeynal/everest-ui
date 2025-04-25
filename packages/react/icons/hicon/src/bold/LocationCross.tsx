import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.78 19.7C17.09 16.756 20 12.477 20 9.61 20 4.854 16.418 1 12 1S4 4.854 4 9.609c0 2.867 2.91 7.146 5.22 10.092 1.204 1.536 1.807 2.305 2.78 2.305s1.576-.769 2.78-2.305M10.53 7.47a.75.75 0 1 0-1.06 1.06l1.59 1.591-1.59 1.591a.75.75 0 0 0 1.06 1.061l1.591-1.591 1.591 1.591a.75.75 0 0 0 1.061-1.06l-1.591-1.592 1.591-1.59a.75.75 0 1 0-1.06-1.061L12.12 9.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLocationCross;
