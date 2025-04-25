import * as React from "react";
import type { SVGProps } from "react";
const SvgTurntableMusicNote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c1.241 1.241 1.43 3.123 1.46 6.536M19 20v-8"
    />
    <circle cx={17} cy={20} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 15a3 3 0 0 1-3-3"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
    />
  </svg>
);
export default SvgTurntableMusicNote;
