import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRoundVideo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 12c0-.844-.927-1.414-2.78-2.553C11.34 8.292 10.4 7.715 9.7 8.139 9 8.563 9 9.709 9 12s0 3.437.7 3.861c.701.424 1.64-.153 3.52-1.308C15.073 13.414 16 12.844 16 12Z"
    />
  </svg>
);
export default SvgChatRoundVideo;
