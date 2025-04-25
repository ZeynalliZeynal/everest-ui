import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentationGraph = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 2h20M9 10.5l1.293-1.293c.333-.333.5-.5.707-.5s.374.167.707.5l.586.586c.333.333.5.5.707.5s.374-.167.707-.5L15 8.5M12 21v-4M10 22l2-1M14 22l-2-1"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M20 2v8.5c0 3.064 0 4.596-1.004 5.548s-2.62.952-5.853.952h-2.286c-3.232 0-4.849 0-5.853-.952S4 13.564 4 10.5V2"
    />
  </svg>
);
export default SvgPresentationGraph;
