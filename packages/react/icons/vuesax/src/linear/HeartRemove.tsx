import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartRemove = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 17.2c0 2.65-2.15 4.8-4.8 4.8-1.42 0-2.69-.62-3.57-1.6a4.8 4.8 0 0 1-1.23-3.2c0-2.65 2.15-4.8 4.8-4.8 1.37 0 2.61.58 3.49 1.51-.01 0-.01 0 0 .01.81.86 1.31 2.01 1.31 3.28M18.48 18.54 15.95 16M18.45 16.03l-2.53 2.54"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 8.69c0 1.97-.51 3.71-1.31 5.22a4.8 4.8 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.81 0 3.43.88 4.44 2.23a5.55 5.55 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69"
    />
  </svg>
);
export default SvgHeartRemove;
