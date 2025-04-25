import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmTurnOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.121 15.121 12 13m0 0-2.121-2.121M12 13l2.121-2.121M12 13l-2.121 2.121"
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
export default SvgAlarmTurnOff;
