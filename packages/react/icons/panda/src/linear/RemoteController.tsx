import * as React from "react";
import type { SVGProps } from "react";
const SvgRemoteController = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674c.437.292.812.667 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M15 15.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M9 5.5h6" />
    <circle cx={9} cy={9} r={1} fill="#000" />
    <circle cx={12} cy={9} r={1} fill="#000" />
    <circle cx={15} cy={9} r={1} fill="#000" />
  </svg>
);
export default SvgRemoteController;
