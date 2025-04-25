import * as React from "react";
import type { SVGProps } from "react";
const SvgTextCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3H8c-1.886 0-2.828 0-3.414.586S4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586S20 5.114 20 7v.95M12 3v6m0 12v-6M7 21h10"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M4 12h16" />
  </svg>
);
export default SvgTextCross;
