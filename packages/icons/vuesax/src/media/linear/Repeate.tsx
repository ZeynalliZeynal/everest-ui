import * as React from "react";
import type { SVGProps } from "react";
const SvgRepeate = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14 3 2.44 2.34-7.95-.02c-3.57 0-6.5 2.93-6.5 6.52 0 1.79.73 3.42 1.91 4.6M10 21l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 14.67V9.33L10.75 11"
    />
  </svg>
);
export default SvgRepeate;
