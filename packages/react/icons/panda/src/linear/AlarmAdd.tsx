import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={13} r={9} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 13h-3m0 0H9m3 0v-3m0 3v3"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.5 4.5 4-2.5M20.5 4.5l-4-2.5"
    />
  </svg>
);
export default SvgAlarmAdd;
