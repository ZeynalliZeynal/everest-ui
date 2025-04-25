import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchSquareMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674c.437.292.812.667 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v3.077L14 14"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 2h10M7 22h10"
    />
  </svg>
);
export default SvgWatchSquareMinimalistic;
