import * as React from "react";
import type { SVGProps } from "react";
const SvgPalette = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M12.196 2h-.384C6.392 2 2 6.393 2 11.812v.384a9.35 9.35 0 0 0 7.678 9.2 2.338 2.338 0 0 0 2.718-2.718L12 16.5c-.484-2.66 1.84-4.984 4.5-4.5l2.178.396a2.338 2.338 0 0 0 2.718-2.718A9.35 9.35 0 0 0 12.196 2Z"
    />
    <path
      fill="currentColor"
      d="M14 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgPalette;
