import * as React from "react";
import type { SVGProps } from "react";
const SvgUserHands = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 13h8m-8 0v5c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-5m-8 0c-1.71 0-3.15 1.28-3.35 2.98L4 21.5M16 13c1.71 0 3.15 1.28 3.35 2.98L20 21.5"
    />
    <circle cx={12} cy={6} r={4} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgUserHands;
