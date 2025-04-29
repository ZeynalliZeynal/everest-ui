import * as React from "react";
import type { SVGProps } from "react";
const SvgCardSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 13v-1c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3M10 16H6M2 10h20"
    />
    <circle cx={18} cy={17} r={3} stroke="#1C274C" strokeWidth={1.5} />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m20.5 19.5 1 1"
    />
  </svg>
);
export default SvgCardSearch;
