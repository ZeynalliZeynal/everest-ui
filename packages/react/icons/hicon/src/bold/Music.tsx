import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.25 7.486-8.5 2.55v8.442a3.75 3.75 0 1 1-1.5-3V5.985a2.75 2.75 0 0 1 1.995-2.644l2.042-.583 4.58-1.41a2.227 2.227 0 0 1 2.883 2.129v12a3.75 3.75 0 1 1-1.5-3z"
    />
  </svg>
);
export default SvgMusic;
