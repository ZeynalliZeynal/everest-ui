import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7M6.89 2.52v18.96M16.89 2.52v18.96M6.89 6.97H2.54M6.89 12H2.03M6.89 16.97H2.48M21.89 6.97h-4.35M21.89 12h-4.86M16.97 12h-11M21.89 16.97h-4.41"
    />
  </svg>
);
export default SvgVideoVertical;
