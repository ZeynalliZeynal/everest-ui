import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterUnread = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 10c.018.727 0 1.054 0 2 0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h3"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m6 8 2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296"
    />
    <circle cx={19} cy={5} r={3} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgLetterUnread;
