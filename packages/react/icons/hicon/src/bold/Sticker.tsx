import * as React from "react";
import type { SVGProps } from "react";
const SvgSticker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12q0 .635-.072 1.25h-1.84c-1.706 0-2.747 0-3.615.281a5.75 5.75 0 0 0-3.692 3.692c-.281.868-.281 1.909-.281 3.615v1.84q-.615.072-1.25.072C6.063 22.75 1.25 17.937 1.25 12"
    />
    <path
      fill="currentColor"
      d="M14.75 22.395a10.77 10.77 0 0 0 7.645-7.645H21c-1.92 0-2.702.01-3.313.208a4.25 4.25 0 0 0-2.729 2.729c-.199.611-.208 1.393-.208 3.313z"
    />
  </svg>
);
export default SvgSticker;
