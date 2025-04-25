import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 12c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 4.545C4.8 4 6.2 4 9 4h6c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 7.8 23 9.2 23 12s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C19.2 20 17.8 20 15 20H9c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 16.2 1 14.8 1 12m19-2.25h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5M7.25 15a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m14 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKeyboard;
