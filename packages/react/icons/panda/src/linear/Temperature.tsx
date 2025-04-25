import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperature = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22a5.5 5.5 0 0 0 3.439-9.793c-.264-.211-.439-.521-.439-.86V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86A5.5 5.5 0 0 0 12 22Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M14.5 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 14V5" />
  </svg>
);
export default SvgTemperature;
