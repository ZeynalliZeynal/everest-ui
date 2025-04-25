import * as React from "react";
import type { SVGProps } from "react";
const SvgStretching = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={14.5} cy={4.5} r={2.5} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907l2.712-4.848a2 2 0 0 0 .255-.977v-2.62a1.5 1.5 0 0 0-2.091-1.38l-2.456 1.053a1.5 1.5 0 0 0-.456 2.453L8.5 14M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.164"
    />
  </svg>
);
export default SvgStretching;
