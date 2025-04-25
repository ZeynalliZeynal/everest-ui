import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeakerMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M16 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M10 6h4" />
  </svg>
);
export default SvgSpeakerMinimalistic;
