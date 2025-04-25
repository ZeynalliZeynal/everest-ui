import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferVertical = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 4v16l-6-5.5M14 20V4l6 5.5"
    />
  </svg>
);
export default SvgTransferVertical;
