import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldTick = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m15 10-2.021 2.509C12.178 13.503 11.777 14 11.25 14s-.927-.497-1.728-1.491L9 11.862M18.89 16c1.6-2.92 2.012-6.25 2.093-8.363.046-1.21-.953-2.137-2.165-2.137h-.589a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 0 14.729 2H9.563a2.04 2.04 0 0 0-2.042 2.042A2.04 2.04 0 0 1 5.48 6.083h-.31c-1.207 0-2.206.92-2.145 2.126.099 1.95.532 4.96 2.086 7.791.423.77.997 1.543 1.634 2.28 1.98 2.287 2.97 3.43 5.255 3.43s3.275-1.143 5.255-3.43c.637-.737 1.212-1.51 1.634-2.28Z"
    />
  </svg>
);
export default SvgShieldTick;
