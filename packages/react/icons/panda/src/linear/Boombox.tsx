import * as React from "react";
import type { SVGProps } from "react";
const SvgBoombox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 9.5h12"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14ZM16 6c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M11 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM18.121 18.121a3 3 0 1 1-4.242-4.242 3 3 0 0 1 4.242 4.242Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 13v2M18.121 13.879l-1.414 1.414"
    />
  </svg>
);
export default SvgBoombox;
