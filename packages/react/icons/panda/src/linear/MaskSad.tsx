import * as React from "react";
import type { SVGProps } from "react";
const SvgMaskSad = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12V6.719c0-2.19 0-3.285-.707-3.884-.707-.6-1.788-.42-3.95-.059l-1.055.176c-1.64.273-2.46.41-3.288.41s-1.648-.137-3.288-.41l-1.054-.176c-2.162-.36-3.243-.54-3.95.059S3 4.529 3 6.719V12c0 5.49 4.239 8.155 6.899 9.286.721.307 1.082.46 2.101.46 1.02 0 1.38-.153 2.101-.46C16.761 20.155 21 17.49 21 12Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1M13.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1M8.5 15s1.05-1 3.5-1 3.5 1 3.5 1"
    />
  </svg>
);
export default SvgMaskSad;
