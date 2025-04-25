import * as React from "react";
import type { SVGProps } from "react";
const SvgWheelAngle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 22c2.485 0 4.5-4.477 4.5-10S18.985 2 16.5 2M12 12c0 5.523-2.015 10-4.5 10S3 17.523 3 12 5.015 2 7.5 2 12 6.477 12 12Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M7.5 22c2.485 0 4.5-4.477 4.5-10S9.985 2 7.5 2"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M9 12c0 3.314-.672 6-1.5 6S6 15.314 6 12s.672-6 1.5-6S9 8.686 9 12ZM7.5 2h9M7.5 22h9"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M9 12H8" />
  </svg>
);
export default SvgWheelAngle;
