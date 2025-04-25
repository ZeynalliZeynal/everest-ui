import * as React from "react";
import type { SVGProps } from "react";
const SvgUnread = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 12.9 3.143 3.6L18 7.5"
    />
  </svg>
);
export default SvgUnread;
