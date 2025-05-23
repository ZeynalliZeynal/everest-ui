import * as React from "react";
import type { SVGProps } from "react";
const SvgCloseCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.652 10.652A.75.75 0 1 0 13.59 9.59L12 11.182l-1.591-1.591a.75.75 0 1 0-1.06 1.06l1.59 1.592-1.59 1.59a.75.75 0 0 0 1.06 1.061L12 13.304l1.591 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.591z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloseCircle;
