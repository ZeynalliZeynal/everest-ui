import * as React from "react";
import type { SVGProps } from "react";
const SvgDiscountCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m13.937-3.187a.75.75 0 0 1 0 1.06L9.53 15.53a.75.75 0 0 1-1.06-1.06l5.656-5.657a.75.75 0 0 1 1.061 0M9 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2m6 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDiscountCircle;
